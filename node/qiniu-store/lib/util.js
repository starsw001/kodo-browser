module.exports = {
  parseLocalPath: parseLocalPath,
  parseKodoPath: parseKodoPath,
  getEtag: getEtag,
};

function parseLocalPath(p) {
  if (typeof p != "string") {
    return p;
  }

  return {
    name: path.basename(p),
    path: p
  };
}

function parseKodoPath(kodoPath) {
  if (typeof kodoPath !== "string") {
    return kodoPath;
  }

  if (!kodoPath.startsWith("kodo://")) {
    throw Error("Invalid kodo path");
  }

  const splits = kodoPath.substring("kodo://".length).split('/', 2);
  var bucket = splits[0];
  var key = splits[1];
  return {
    bucket: bucket,
    key: key.replace(/\\/g, '/')
  };
}

function getEtag(buffer, callback) {
  let mode = 'buffer';

  if (typeof buffer === 'string') {
    buffer = require('fs').createReadStream(buffer);
    mode = 'stream';
  } else if (buffer instanceof require('stream')){
    mode = 'stream';
  }

  const sha1 = function(content){
    const crypto = require('crypto');
    const sha1 = crypto.createHash('sha1');
    sha1.update(content);
    return sha1.digest();
  };

  // 以4M为单位分割
  const blockSize = 4*1024*1024;
  const sha1String = [];
  let prefix = 0x16;
  let blockCount = 0;

  switch (mode) {
    case 'buffer':
      var bufferSize = buffer.length;
      blockCount = Math.ceil(bufferSize / blockSize);

      for(var i = 0; i < blockCount; i++){
        sha1String.push(sha1(buffer.slice(i * blockSize, (i + 1) * blockSize)));
      }
      process.nextTick(function(){
        callback(calcEtag());
      });
      break;
    case 'stream':
      var stream = buffer;
      stream.on('readable', function() {
        var chunk;
        while (chunk = stream.read(blockSize)) {
          sha1String.push(sha1(chunk));
          blockCount++;
        }
      });
      stream.on('end',function(){
        callback(calcEtag());
      });
      break;
  }

  function calcEtag() {
    if (!sha1String.length) {
      return 'Fto5o-5ea0sNMlW_75VgGJCv2AcJ';
    }
    let sha1Buffer = Buffer.concat(sha1String, blockCount * 20);

    // 如果大于4M，则对各个块的sha1结果再次sha1
    if (blockCount > 1){
      prefix = 0x96;
      sha1Buffer = sha1(sha1Buffer);
    }

    sha1Buffer = Buffer.concat([Buffer.from([prefix]), sha1Buffer], sha1Buffer.length + 1);

    return sha1Buffer.toString('base64')
      .replace(/\//g,'_').replace(/\+/g,'-');
  }
}
