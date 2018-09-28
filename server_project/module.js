var MongoClient=require('mongodb').MongoClient;

exports.getData=function(val,res){
MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
        if (err) throw err;
        console.log(val);
        var coll= db.db('adDatabase');
        coll.collection('ad').find({"$or":[{"category":{ $regex : new RegExp(val, "i") } },{"subCategory":{ $regex : new RegExp(val, "i") }},{"manufacturer":{ $regex : new RegExp(val, "i") }},{"location":{ $regex : new RegExp(val, "i") }}]}).toArray(function(err,data){
            if (err) throw err;
            res.send(data);
            db.close();
        });
        db.close();
    })
}

/*exports.getDatas=function(val1,val2,res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
           // console.log(val2)
           let str=val2;
            str=str.slice(1)
           let x= val2.charAt(0).toUpperCase();
            console.log(x)
            val3=x+str;
            console.log(val3);
            coll.collection('ad').find({"subCategory":{ $regex : /val/i } }).toArray(function(err,data){
                if (err) throw err;
               // console.log(data);
                res.send(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    */
exports.television=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Television"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }

exports.othersElectronics=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Electronics","subCategory":"Others"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }

 exports.property=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Property"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }

    exports.apartment=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Apartment"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.bungalow=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Bungalow"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.sites=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Sites"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }

    exports.villa=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Villa"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);                                                
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }   
    exports.othersProperty=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Property","subCategory":"Others"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.vehicles=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Vehicles"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.twowheelers=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"2Wheelers"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.fourwheelers=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"4Wheelers"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.othersvehicles=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Vehicles","subCategory":"Others"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.others=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"category":"Others"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.books=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Books"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }
    exports.furniture=function(res){

    MongoClient.connect('mongodb://localhost:27017/adDatabase', function(err,db){
            if (err) throw err;
            var coll= db.db('adDatabase');
            coll.collection('ad').find({"subCategory":"Furniture"}).toArray(function(err,data){
                if (err) throw err;
                res.send(data);
                console.log(data);
                db.close();
                
            });
            db.close();
        })
    
    }