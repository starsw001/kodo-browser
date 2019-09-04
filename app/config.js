/*
 * {
 *   "regions": [{
 *      id: "regionA",
 *      label: "区域 A",
 *      endpoint: "https://s3-region-1.localhost.com",
 *      storageClasses: [
 *        { value: "Standard", name: "标准类型" },
 *        { value: "IA", name: "低频访问类型" }
 *      ]
 *   }],
 *   "uc_url": "https://uc.qbox.me"
 * }
 */

angular.module("web").factory("Config", ["$translate", "Const", "Toast",
    ($translate, Const, Toast) => {
        class ConfigError extends Error { }
        class ConfigParseError extends Error { }

        const fs = require('fs'),
              path = require('path'),
              each = require('array-each'),
              T = $translate.instant,
              defaultUcUrl = "https://uc.qbox.me",
              default_regions = Const.regions,
              configFilePath = path.join(Global.config_path, 'config.json');

        return {
            save: saveConfig,
            load: loadConfig,
        };

        function loadConfig(loadDefault) {
            let ucUrl = defaultUcUrl, regions = default_regions;

            if (!loadDefault) {
                try {
                    if (fs.existsSync(configFilePath)) {
                        let config = null;

                        try {
                            config = JSON.parse(fs.readFileSync(configFilePath));
                        } catch (e) {
                            throw new ConfigParseError(e.message);
                        }
                        if (config.uc_url) {
                            ucUrl = config.uc_url;
                        }
                        if (config.regions) {
                            each(config.regions, (region) => {
                                if (!region.id) {
                                    throw new ConfigError('id is missing or empty in region');
                                }
                                if (!region.label) {
                                    throw new ConfigError('label is missing or empty in region');
                                }
                                if (!region.endpoint) {
                                    throw new ConfigError('endpoint is missing or empty in region');
                                }
                                if (!region.storageClasses) {
                                    throw new ConfigError('storageClasses is missing or empty in region');
                                } else {
                                    each(region.storageClasses, (storageClass) => {
                                        if (!storageClass.name) {
                                            throw new ConfigError('name is missing or empty in storageClass');
                                        }
                                        if (!storageClass.value) {
                                            throw new ConfigError('value is missing or empty in storageClass');
                                        }
                                    });
                                }
                            });
                            regions = config.regions;
                        }
                    }
                } catch (e) {
                    if (e instanceof ConfigParseError) {
                        Toast.error(T('config.parse.error'));
                        console.error(e);
                    } else if (e instanceof ConfigError) {
                        Toast.error(T('config.format.error'));
                        console.error(e);
                    } else {
                        throw e;
                    }
                }
            }

            return { ucUrl: ucUrl, regions: regions };
        }

        function saveConfig(ucUrl, regions) {
            if (!ucUrl) {
                throw new ConfigError('ucUrl is missing or empty');
            }

            const new_config = { uc_url: ucUrl, regions: regions };

            each(regions, (region) => {
                if (!region.id) {
                    throw new ConfigError('id is missing or empty in region');
                }
                if (!region.label) {
                    throw new ConfigError('label is missing or empty in region');
                }
                if (!region.endpoint) {
                    throw new ConfigError('endpoint is missing or empty in region');
                }
                if (!region.storageClasses || !region.storageClasses.length) {
                    region.storageClasses = [
                        { value: 'Standard', name: '标准类型' },
                        { value: 'IA', name: '低频访问类型' }
                    ];
                }
            });

            fs.writeFileSync(configFilePath, JSON.stringify(new_config, null, 4), { mode: 0o600 });
        }
    }
]);
