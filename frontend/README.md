# WordFlash

**WordFlash** is a small personal project I am building to train my short-term memory for words and to grow as a software engineer.

## Live Demo

Try the app live here: [https://word-flash-dun.vercel.app](https://word-flash-dun.vercel.app)


## Getting Started

This project uses [Vite](https://vitejs.dev) with React.

To run locally:

```bash
npm install
npm run dev
```

## Why I am building this

I am a strong believer in neuroplasticity, i.e., the brain’s ability to change and adapt through training. 

One of my biggest inspirations is Barbara Arrowsmith Young, who overcame her learning disabilities by inventing cognitive exercises that targeted her specific weaknesses. She designed her own tools to help her brain grow stronger in the areas where she struggled, and her story left a strong impression on me.

Like her, I want to create something that helps me improve in a specific cognitive area where I often struggle. Of course, the challenges I face are not remotely comparable to hers, but this is still meaningful to me as a personal exercise in growth and focus.

## My specific problem

I am not a native English speaker, and I am learning German. Sometimes I come across a new word on my phone or computer and want to look it up. I often switch to Google or a dictionary, but by the time I get there, I have already forgotten how the word was spelled. I end up jumping between tabs multiple times, trying to reconstruct what I just saw a few seconds earlier.

Of course, copy-paste or built-in shortcuts exist. However:

1. It is not always convenient.
2. More importantly, I want to train myself to hold the word in short-term memory, even briefly.

It may not be the most useful skill in a traditional sense, but for me, it is a way to build mental focus and improve a personal weakness. Practice makes perfect!

## Learning to code, too

I am transitioning into a software engineering career. This project is an opportunity for me to learn:

- **React** for frontend development
- **FastAPI** for building a lightweight backend (not strictly necessary for an app this small, but I am using it anyway because I want to learn how to build and connect a backend)
- Full-stack development in general

## What the app does

The core idea is simple: **you see a word, hold it in your mind, and recall it from memory**.

- For each word:
  - The word is displayed on screen.
  - A timer starts automatically.
  - You can press any key on your keyboard or click/tap the screen to hide the word and stop the timer.
  - After a brief delay, an input field appears.
  - You enter the word you just saw.

- If your answer is correct, you move on to the next word.
- If it is incorrect, you can try again until you get it right.

## Word list

I understand that the exercise loses its purpose if you already know the words. To avoid that, I used ChatGPT to help curate a list of **rare English words**.

There is no guarantee that:
- All words are valid English words (some may be obscure, archaic, or questionable).
- The words are rare *enough* that you have never seen them before.

In the future, I plan to expand the list with proper names, less common foreign words, or other interesting entries.

Here is a breakdown of the word list by word length:

- Length 5: 206 words  
- Length 6: 530 words  
- Length 7: 834 words  
- Length 8: 902 words  
- Length 9: 924 words  
- Length 10: 681 words  
- Length 11: 409 words  
- Length 12: 191 words

## Scoring

Scoring is based on word length, with longer words worth more points to reflect their increased difficulty.

The maximum score for a word of length n is calculated using this formula:

max_score = round(1200 × 1.3^n)

where n is the word length.

*Note: The constants 1200 and 1.3 are arbitrary values. I might adjust these constants later to balance the scoring system based on gameplay experience.*

| Word Length | Max Score |
|-------------|-----------|
| 5           | 4455      |
| 6           | 5792      |
| 7           | 7529      |
| 8           | 9788      |
| 9           | 12725     |
| 10          | 16543     |
| 11          | 21505     |
| 12          | 27957     |

Your actual score for each word is calculated by subtracting the total time taken (in milliseconds) from its maximum score, then multiplying by a penalty multiplier based on the number of attempts:

score = max((max_score - total_time_taken) * (1 - 0.05 * min(num_attempts - 1, 4)), 100)

A minimum score of 100 ensures you always get some points, even with slow or repeated attempts.

## Different levels

Start at Level 1. To unlock the next level, you must score at least 90% of the maximum possible points for the current level.

## Tech stack

| Frontend | Backend (Coming Soon) |
|----------|------------------------|
| React (Vite) | FastAPI |
| JavaScript | Python |
| Tailwind CSS | REST API |

## Roadmap

- [x] React frontend MVP
- [ ] Store progress locally (Level unlock system)
- [ ] Add FastAPI backend with word data
- [ ] Add authentication
- [ ] Store progress in database
- [ ] Expand word list

## Getting Started

This project uses [Vite](https://vitejs.dev) with React.

To run locally:

```bash
npm install
npm run dev