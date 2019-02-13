import jenkins from 'jenkins';

const jenkinsMgr = jenkins({ baseUrl: process.env.JENKINS_BASE_URL, crumbIssuer: process.env.JENKINS_CRUMB_ENABLED });

jenkinsMgr.info((info) => {
  console.log(info);
});

module.exports = jenkinsMgr;
