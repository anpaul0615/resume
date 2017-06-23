/**
 *  get archive-name
 */
function getAchiveName(){
  var deferred = $.Deferred();
  try{
    var archiveName = decodeURIComponent(document.location.hash.slice(1));
    deferred.resolve(archiveName);
  }catch(err){
    deferred.reject(err);
  }
  return deferred.promise();
}

/**
 *  get post meta-data by archive-name
 */
function getPostMetaData(archiveName){
  var deferred = $.Deferred();
  if(archiveName === ''){
    return deferred.reject('no-data');
  }else{
    $.get('/index.json')
    .then(function(res){
      if(res[0] === null) deferred.reject('no-data');
      else{
        var posts = res.filter(function(post){
          return (post)? (post.archive === archiveName) : false;
        });
        if(posts.length === 0) deferred.reject('no-data');
        else deferred.resolve(posts);
      }
    })
    .fail(function(err){
      deferred.reject(JSON.stringify(err));
    });
  }
  return deferred.promise();
}
