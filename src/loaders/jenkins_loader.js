import jenkins from 'jenkins';

export default (config) => {
  const jenkinsMgr = jenkins({ baseUrl: config.jenkins_url, crumbIssuer: config.crumb_enabled, headers: { 'Access-Control-Allow-Origin': '*' } });
  jenkinsMgr.info((err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
  return jenkinsMgr;
};
