module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-video-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "MOHAMMAD RANA",
        devfb: "https://www.facebook.com/XAICO.RANA",
        devwp: "wa.me/+8801988686406", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
