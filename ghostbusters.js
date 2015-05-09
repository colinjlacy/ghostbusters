//if (Meteor.isClient) {
//  // counter starts at 0
//  Session.setDefault("counter", 0);
//
//  Template.hello.helpers({
//    counter: function () {
//      return Session.get("counter");
//    }
//  });
//
//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set("counter", Session.get("counter") + 1);
//    }
//  });
//}
//
if (Meteor.isServer) {
  Meteor.startup(function () {
      if (Jobs.find().count() === 0) {
          Jobs.insert({
              "description": "Scary librarian",
              "submittedOn": new Date(),
              "status": 0,
              "log": []
          });
          Jobs.insert({
              "description": "Marshmallow Man",
              "submittedOn": new Date(),
              "status": 0,
              "log": []
          });
          Jobs.insert({
              "description": "Who brought the dog?",
              "submittedOn": new Date(),
              "status": 0,
              "log": []
          });
          Jobs.insert({
              "description": "Slime in the sewers",
              "submittedOn": new Date(),
              "status": 0,
              "log": []
          });
          Jobs.insert({
              "description": "Tell people about the twinky",
              "submittedOn": new Date(),
              "status": 1,
              "assignedTo": function() {
                  return Meteor.users.findOne({"profile.role": 2})
              },
              "log": [
                  "Assigned on " + new Date().toDateString() + " by Janine"
              ]
          });
          Jobs.insert({
              "description": "Dogs and cats, living together, mass hysteria",
              "submittedOn": new Date(),
              "status": 1,
              "assignedTo": function() {
                  return Meteor.users.findOne({"profile.role": 2})
              },
              "log": [
                  "Assigned on " + new Date().toDateString() + " by Janine"
              ]
          });
          Jobs.insert({
              "description": "Electroshock psychic training",
              "submittedOn": new Date(),
              "status": 1,
              "assignedTo": function() {
                  return Meteor.users.findOne({"profile.role": 2})
              },
              "log": [
                  "Assigned on " + new Date().toDateString() + " by Janine"
              ]
          });
          Jobs.insert({
              "description": "Find out why the library is covered in slime",
              "submittedOn": new Date(),
              "status": 1,
              "assignedTo": function() {
                  return Meteor.users.findOne({"profile.role": 2})
              },
              "log": [
                  "Assigned on " + new Date().toDateString() + " by Janine"
              ]
          });
          Jobs.insert({
              "description": "Take a day off",
              "submittedOn": new Date(),
              "status": 1,
              "assignedTo": function() {
                  return Meteor.users.findOne({"profile.role": 2})
              },
              "log": [
                  "Assigned on " + new Date().toDateString() + " by Janine"
              ]
          });
      }
  });
}
Handlebars.registerHelper('prettifyDate', function(date) {
        return new Date(date).toDateString()
    });