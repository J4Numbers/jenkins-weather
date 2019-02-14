import jenkins from 'jenkins';

let jenkinsManager = undefined;

export default (config = {}) => {
  if (jenkinsManager === undefined) {
    jenkinsManager = jenkins(
      {
        promisify: true,
        baseUrl: config.jenkins_url,
        headers: {
          'Authorization': 'Basic user:password'
        }
      });
  }
  return jenkinsManager;
};
