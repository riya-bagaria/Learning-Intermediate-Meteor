import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');
RecipeSchema = new SimpleSchema({
        name: {
            label: "Name",
            type: String
        },
        desc: {
            label: "Description",
            type: String
        },
        author:{
            type:String,
            label:"Author",
            autoValue:function(){
                return this.userId;
            },
            autoform:{
                type: "hidden"
            }
        },
        createAt: {
            type:Date,
            label:"Created At",
            autoValue: function(){
                return new Date();
            },
            autoform:{
                type: "hidden"
            }
        }
});
Recipes.attachSchema( RecipeSchema );