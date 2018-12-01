var fs=require('fs');



var fileName='.';
		console.log('PROCESSING FOR :-'+fileName)
		fs.stat(fileName, (err,stats) => {
				if (err) {
					console.log(' ERROR READING THE FILE IN FS.STAT:-');
				} else {
					if (stats.isFile()) {
						console.log('YOU PROVIDED INPUT AS A FILE AND NOT A DIR:-');
					} else {
						fs.readdir(fileName, function(err,files) {
							if (err) {
								console.log(' ERROR READING THE DIR:-');
							} else {
								fileName=files;
								fileName.forEach((val,ind,arr)=> {
									console.log('FILE IS:-'+val);
								});
							}
						});
					}	
				}

		});
