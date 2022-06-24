'use strict';

document.querySelector('.ads').remove();

document.querySelector('.items').prepend(document.querySelector('.item_one'));

document.querySelector('.item_three')
    .after(document.querySelector('.item_four'));

document.querySelector('.item_three .content')
    .append(document.querySelector('.item_five .props__list'));

document.querySelector('.item_five .content')
    .append(document.querySelector('.item_three .props__list'));

document.querySelector('.item_two .props__list')
    .before(document.querySelector('.item_five .item__title'));

document.querySelector('.item_six .props__list')
    .before(document.querySelector('.item_two .item__title'));

document.querySelector('.item_five .props__list')
    .before(document.querySelector('.item_six .item__title'));


document.querySelector('.item_three .item__title')
    .textContent = 'This и прототипы объектов';


document.querySelectorAll('.item_four .props__item_four')[2]
    .after(document.querySelector('.item_two .props__item_four'));


document.querySelector('.item_two .props__list')
    .append(document.querySelectorAll('.item_six .props__item_two')[0],
        document.querySelectorAll('.item_six .props__item_two')[1]);
