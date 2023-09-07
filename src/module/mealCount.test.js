import { JSDOM } from 'jsdom';
import { mealsnumber, showMeals } from './mealCount.js';

const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;

describe('mealCount.js', () => {
  describe('mealsnumber function', () => {
    it('fetches the meals data correctly', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({ meals: [{}, {}, {}] }),
      });
      const count = await mealsnumber();
      expect(count).toBe(3);
    });
  });

  describe('showMeals function', () => {
    it('updates the text content of the li element', () => {
      const li = document.createElement('li');
      li.classList.add('meals-num');
      document.body.appendChild(li);
      showMeals(5);
      expect(li.textContent).toBe('Meals(5)');
      document.body.removeChild(li);
    });
  });
});
