import Backbone from 'backbone';
import _ from 'underscore';
import numberStatsTemplate from 'template/number-stats.html';

export default Backbone.View.extend({
    tagName: 'div',
    className: 'number-stats panel',
    template: _.template(numberStatsTemplate),
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
});