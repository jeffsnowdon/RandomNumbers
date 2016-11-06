import Backbone from 'backbone';
import _ from 'underscore';
import numberGeneratorTemplate from 'template/number-stats.html';

export default Backbone.View.extend({
    tagName : 'div',
    class : 'number-stats',
    template : _.template(numberGeneratorTemplate),
    initialize : function(){
        this.listenTo(this.model, "change", this.render);
    },
    render : function(){
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
});