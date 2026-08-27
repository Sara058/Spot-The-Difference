# Spot the Difference Game

An interactive web-based puzzle game where players compare two side-by-side images to find hidden differences before time runs out. When a user correctly identifies a difference, a visual circle highlights the spot.

## Stack

JavaScript, HTML5, CSS3

## What I built

Built in a team of two as a first-semester assignment. I was responsible for the core geometric and mathematical logic required to detect, calculate, and highlight click target locations for differences on the images.

## Interesting problem

We initially calculated the difference coordinates using absolute pixel values, which broke responsiveness completely when tested on screens of different sizes and resolutions. To solve this, I refactored the spatial coordinate logic to calculate hit areas using relative percentages instead of fixed pixels. This made the hit detection fully responsive and accurate across any screen dimension.

## Screenshots

<img width="1912" height="980" alt="SpotDemo1" src="https://github.com/user-attachments/assets/9cb7c7a9-874f-4647-a5f3-040ed45c853a" />
<img width="1873" height="977" alt="SpotDemo2" src="https://github.com/user-attachments/assets/bf1ec6cb-0a33-492c-95e3-ee2d42aa3bd6" />
<img width="1908" height="987" alt="SpotDemo3" src="https://github.com/user-attachments/assets/af784404-4953-4472-a81f-d36e3e5f0dfe" />
<img width="1913" height="982" alt="SpotDemo4" src="https://github.com/user-attachments/assets/5ad7e252-6204-4d86-a890-40cd85759cb5" />
<img width="1911" height="977" alt="SpotDemo5" src="https://github.com/user-attachments/assets/3b3cfd94-df09-4939-94ad-f2d85c3184aa" />
<img width="1905" height="997" alt="SpotDemo6" src="https://github.com/user-attachments/assets/6d71208b-8f52-4e99-8bf4-4f565d921f57" />
