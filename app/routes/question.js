var QuestionRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('contest').get('questions').then(function(questions){
      return questions.findBy('id', params.question_id);
    });
  }
});

export default QuestionRoute;
