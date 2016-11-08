import Backbone from 'backbone';
import _ from 'underscore';
import numberCurrentTemplate from 'template/number-current.html';

export default Backbone.View.extend({
    tagName: 'div',
    className: 'number-current',
    template: _.template(numberCurrentTemplate),
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
});