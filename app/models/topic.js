exports.definition = {
    config: {
        "columns": {
            id: "Int",
            title: "String",
            excerpt: "String",
            details: "String",
           	created_at: "String",
           	votes: "Int"
        },
        "defaults": {
            id: 0,
            title: "-",
            excerpt: "-",
            details: "-",
 			created_at: "-",
 			votes: 0
        },
        "URL": "http://0.0.0.0:8080/api/topics/detailed",
        "adapter": {
            "type": "restapi",
            "collection_name": "topic"
        },
        parentNode: function (data) {
            var entries = [];
                
            _.each(data, function(_entry, index) {
               var entry = {};
               
               entry.created_at = _entry.created_at;
               entry.title = _entry.title;
               entry.excerpt = _entry.excerpt.slice(0,50);
               entry.votes = _entry.votes;
               entry.details = _entry.details,
              
              entries.push(entry);
            });

            return entries;
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;	
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};