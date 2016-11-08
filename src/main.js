import $ from 'jquery';
import NumberGeneratorModel from './ui/model/number-generator';
import NumberGeneratorView from './ui/view/number-generator';
import NumberCurrentModel from './ui/model/number-current';
import NumberCurrentView from './ui/view/number-current';
import NumberStatsModel from './ui/model/number-stats';
import NumberStatsView from './ui/view/number-stats';
import NumberHistoryModel from './ui/model/number-history';
import NumberHistoryView from './ui/view/number-history';

$(document).ready(function () {
    let numberGeneratorModel = new NumberGeneratorModel();
    let numberGeneratorView = new NumberGeneratorView({
        model: numberGeneratorModel
    });

    let numberCurrentModel = new NumberCurrentModel();
    let numberCurrentView = new NumberCurrentView({
        model: numberCurrentModel
    });

    let numberStatsModel = new NumberStatsModel();
    let numberStatsView = new NumberStatsView({
        model: numberStatsModel
    });

    let numberHistoryModel = new NumberHistoryModel();
    let numberHistoryView = new NumberHistoryView({
        model: numberHistoryModel
    });

    let northFlex = $('<div></div>', {'class': 'container container-vert'});
    let centerFlex = $('<div></div>', {'class': 'container container-hor'});

    northFlex.append(numberGeneratorView.$el)
    northFlex.append(numberCurrentView.$el)
    centerFlex.append(numberStatsView.$el);
    centerFlex.append(numberHistoryView.$el);
    var appContainer = $('.app-container');
    appContainer.empty();
    appContainer.append(northFlex[0]);
    appContainer.append(centerFlex[0]);

    numberGeneratorView.render();
    numberStatsView.render();
    numberHistoryView.render();
});

