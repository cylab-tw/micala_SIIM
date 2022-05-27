const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports.checkExist = async function (filename) {
    return new Promise ((resolve)=> {
        /*fs.exists(filename , function (isExist) {
            return resolve(isExist);
        })*/
        return resolve(fs.existsSync(filename));
    });
}
module.exports.mkdir_Not_Exist =async function (filename)
{
    return new Promise(async (resolve)=>
    {
        let newPath = path.dirname(filename);
        let isExist = await exports.checkExist(newPath);
        if (!isExist) {
            await mkdirp (newPath ,  0 , async function (err) {
                if (err) {
                    console.error(err);
                    return resolve(false);
                }
                return resolve(true);
            })
        } else {
            return resolve(true);
        }
    });
}
module.exports.movefile =  async function movefile (filename ,dest_path)
{
    let mkdir_Statu = await this.mkdir_Not_Exist(dest_path);
    if (mkdir_Statu)
    {
        return new Promise((resolve)=>
        {
            fs.rename(filename , dest_path , function(err)
            {
                if (err)
                {
                    console.log(err);
                    return resolve(false);
                }
                return resolve(true);
            });
        });
    }
}