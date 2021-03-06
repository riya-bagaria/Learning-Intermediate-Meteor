Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar
});

Template.Recipe.helpers({
    updateRecipeId: function(){
        return this._id;
    }
})

Template.Recipe.events({
    'click .toggle-menu':function(){
        Meteor.call('toggleMenuItem',this._id,this.inMenu);
    },
    'click .fa-trash':function(){
        Meteor.call('deleteRecipe',this._id);
    },
    'click .fa-pencil':function(event, template){
        template.editMode.set(!template.editMode.get());
    }
});