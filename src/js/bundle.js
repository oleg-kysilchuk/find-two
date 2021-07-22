import '../styles/style.scss';

import Question from '../assets/question.png';
import Check from '../assets/check.png';
import Fries from '../assets/fries.png';
import Hamburger from '../assets/hamburger.png';
import Hotdog from '../assets/hotdog.png';
import Pizza from '../assets/pizza.png';
import Soda from '../assets/soda.png';
import Taco from '../assets/taco.png';

document.addEventListener('DOMContentLoaded', () => {

    const cardsArray = [
        {
            name: 'fries',
            image: 'assets/fries.png'
        },

        {
            name: 'fries',
            image: 'assets/fries.png'
        },

        {
            name: 'hamburger',
            image: 'assets/hamburger.png'
        },

        {
            name: 'hamburger',
            image: 'assets/hamburger.png'
        },

        {
            name: 'hotdog',
            image: 'assets/hotdog.png'
        },

        {
            name: 'hotdog',
            image: 'assets/hotdog.png'
        },

        {
            name: 'pizza',
            image: 'assets/pizza.png'
        },

        {
            name: 'pizza',
            image: 'assets/pizza.png'
        },

        {
            name: 'soda',
            image: 'assets/soda.png'
        },

        {
            name: 'soda',
            image: 'assets/soda.png'
        },

        {
            name: 'taco',
            image: 'assets/taco.png'
        },

        {
            name: 'taco',
            image: 'assets/taco.png'
        }
    ];

    cardsArray.sort(() => Math.random() - 0.5);

    const grid = document.querySelector('.game-grid');
    var chosenCards = [];
    var chosenCardsId = [];
    var cardsMatched = [];


    function createCards() {

        for(let i = 0, j = cardsArray.length; i < j; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'assets/question.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flip, false);
            grid.appendChild(card);
        }
    };

    function matchCheck() {
        const cards = document.querySelectorAll('img');
        const firstCard = chosenCardsId[0];
        const secondCard = chosenCardsId[1];

        if(chosenCards[0] === chosenCards[1]) {
            alert('You got a match!');
            cards[firstCard].setAttribute('src', 'assets/check.png');
            cards[firstCard].style.pointerEvents = "none";
            cards[secondCard].setAttribute('src', 'assets/check.png');
            cards[secondCard].style.pointerEvents = "none";
            cardsMatched.push(chosenCards);
        } else {
            cards[firstCard].setAttribute('src', 'assets/question.png');
            cards[secondCard].setAttribute('src', 'assets/question.png');
            alert('Try again');
        }

        chosenCards = [];
        chosenCardsId = [];
    };

    function flip() {
        let cardId = this.getAttribute('data-id');
        chosenCards.push(cardsArray[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].image);
        
        if(chosenCards.length === 2) {
            setTimeout(matchCheck, 300);
        }
    }

    createCards();
})