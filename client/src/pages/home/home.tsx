import React from 'react';
import SignupButton from '../../components/signup-button';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero__wrapper">
        <section className="hero">
          <div className="hero__text">
            <div className="hero__tagline">
              <p>Opinions, ideas and</p>
              <p>feedback for better</p>
              <p>functioning teams</p>
            </div>
            <p className="hero__paragraph">
              Gather helps you to understand your team through surveys and posts. It's like Slido
              and Typeform combined but focused on ongoing feedback rather one off presentations &
              milestones.
            </p>
            <SignupButton />
          </div>
          <img className="hero__image" src="/red-squirrel-flickr-tony-cox.png" alt="squirrel" />
        </section>
        <svg
          id="visual"
          viewBox="0 0 1200 100"
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 69L25 65.5C50 62 100 55 150 50.8C200 46.7 250 45.3 300 47.5C350 49.7 400 55.3 450 57.8C500 60.3 550 59.7 600 56.8C650 54 700 49 750 42.3C800 35.7 850 27.3 900 32.3C950 37.3 1000 55.7 1050 59C1100 62.3 1150 50.7 1175 44.8L1200 39L1200 101L1175 101C1150 101 1100 101 1050 101C1000 101 950 101 900 101C850 101 800 101 750 101C700 101 650 101 600 101C550 101 500 101 450 101C400 101 350 101 300 101C250 101 200 101 150 101C100 101 50 101 25 101L0 101Z"
            fill="#f9fafb"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
      </div>
      <section className="features">
        <div className="features__card">
          <div className="features__icon">
            <svg
              className="features__icon--svg"
              width="50"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M 30 20 C 24.477 20 20 24.477 20 30 L 20 220 C 20 225.523 24.477 230 30 230 L 210 230 C 215.523 230 220 225.523 220 220 L 220 30 C 220 24.477 215.523 20 210 20 L 30 20 z M 250 20 C 244.477 20 240 24.477 240 30 C 240 35.523 244.477 40 250 40 L 460 40 C 465.522 40 470 35.523 470 30 C 470 24.477 465.522 20 460 20 L 250 20 z M 40 40 L 200 40 L 200 210 L 40 210 L 40 40 z M 120 70 C 114.477 70 110 74.477 110 80 L 110 110 L 80 110 C 74.477 110 70 114.477 70 120 C 70 125.523 74.477 130 80 130 L 110 130 L 110 160 C 110 165.523 114.477 170 120 170 C 125.523 170 130 165.523 130 160 L 130 130 L 160 130 C 165.523 130 170 125.523 170 120 C 170 114.477 165.523 110 160 110 L 130 110 L 130 80 C 130 74.477 125.523 70 120 70 z M 250 110 C 244.477 110 240 114.477 240 120 C 240 125.523 244.477 130 250 130 L 430 130 C 435.522 130 440 125.523 440 120 C 440 114.477 435.522 110 430 110 L 250 110 z M 250 210 C 244.477 210 240 214.477 240 220 C 240 225.523 244.477 230 250 230 L 490 230 C 495.522 230 500 225.523 500 220 C 500 214.477 495.522 210 490 210 L 250 210 z M 30 290 C 24.477 290 20 294.478 20 300 L 20 490 C 20 495.522 24.477 500 30 500 L 210 500 C 215.523 500 220 495.522 220 490 L 220 300 C 220 294.478 215.523 290 210 290 L 30 290 z M 250 290 C 244.477 290 240 294.478 240 300 C 240 305.522 244.477 310 250 310 L 460 310 C 465.522 310 470 305.522 470 300 C 470 294.478 465.522 290 460 290 L 250 290 z M 40 310 L 200 310 L 200 480 L 40 480 L 40 310 z M 169.71484 360.00391 C 167.7894 360.05687 165.85916 360.66509 164.17578 361.87109 L 89.642578 415.26758 L 78.792969 395.23633 C 76.162969 390.38033 70.093328 388.57403 65.236328 391.20703 C 60.380328 393.83803 58.576031 399.90667 61.207031 404.76367 L 77.457031 434.76367 C 80.321031 440.05167 87.183219 441.63291 92.074219 438.12891 L 175.82422 378.12891 C 180.31422 374.91291 181.34591 368.66578 178.12891 364.17578 C 176.11891 361.37016 172.92392 359.91563 169.71484 360.00391 z M 250 380 C 244.477 380 240 384.478 240 390 C 240 395.522 244.477 400 250 400 L 430 400 C 435.522 400 440 395.522 440 390 C 440 384.478 435.522 380 430 380 L 250 380 z M 250 480 C 244.477 480 240 484.478 240 490 C 240 495.522 244.477 500 250 500 L 490 500 C 495.522 500 500 495.522 500 490 C 500 484.478 495.522 480 490 480 L 250 480 z"></path>
            </svg>{' '}
          </div>
          <div className="features__text">
            <h3>Surveys</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="features__card">
          <div className="features__icon">
            <svg
              className="features__icon--svg"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M 31 4 C 20.523438 4 12 12.523438 12 23 C 12 27.972656 14.78125 31.6875 17.472656 35.28125 C 19.621094 38.152344 21.644531 40.886719 22 44 L 22 51 C 22 54.519531 24.613281 57.433594 28 57.921875 L 28 59 C 28 60.101563 28.898438 61 30 61 L 32 61 C 33.101563 61 34 60.101563 34 59 L 34 57.921875 C 37.386719 57.433594 40 54.519531 40 51 L 40 44.898438 C 40.015625 41.402344 42.222656 38.429688 44.5625 35.28125 C 47.238281 31.6875 50 27.972656 50 23 C 50 12.523438 41.476563 4 31 4 Z M 31 6 C 40.375 6 48 13.625 48 23 C 48 27.3125 45.4375 30.757813 42.960938 34.089844 C 40.71875 37.105469 38.40625 40.210938 38.046875 43.9375 L 32 43.9375 L 32 41 C 32 40.449219 31.550781 40 31 40 C 30.449219 40 30 40.449219 30 41 L 30 43.941406 L 24.027344 43.941406 C 23.664063 40.214844 21.332031 37.101563 19.074219 34.082031 C 16.578125 30.75 14 27.308594 14 23 C 14 13.625 21.625 6 31 6 Z M 30.863281 8.996094 C 28.191406 9.019531 25.582031 9.804688 23.3125 11.296875 C 22.851563 11.597656 22.726563 12.21875 23.03125 12.679688 C 23.222656 12.972656 23.539063 13.128906 23.863281 13.128906 C 24.054688 13.128906 24.242188 13.078125 24.414063 12.964844 C 27.003906 11.261719 30.117188 10.636719 33.183594 11.199219 C 33.730469 11.296875 34.25 10.9375 34.347656 10.394531 C 34.449219 9.851563 34.089844 9.332031 33.546875 9.234375 C 32.652344 9.066406 31.757813 8.988281 30.863281 8.996094 Z M 37.859375 10.875 C 37.476563 10.820313 37.074219 10.996094 36.859375 11.347656 C 36.574219 11.824219 36.726563 12.4375 37.203125 12.722656 C 38.027344 13.222656 38.796875 13.824219 39.484375 14.515625 C 39.679688 14.710938 39.9375 14.808594 40.191406 14.808594 C 40.449219 14.808594 40.707031 14.710938 40.902344 14.515625 C 41.292969 14.125 41.292969 13.492188 40.902344 13.101563 C 40.09375 12.296875 39.199219 11.59375 38.234375 11.011719 C 38.117188 10.941406 37.988281 10.894531 37.859375 10.875 Z M 5.023438 11.511719 C 4.632813 11.519531 4.265625 11.753906 4.109375 12.136719 C 3.90625 12.648438 4.152344 13.234375 4.664063 13.4375 L 8.375 14.9375 C 8.496094 14.988281 8.621094 15.011719 8.746094 15.011719 C 9.140625 15.011719 9.519531 14.773438 9.675781 14.386719 C 9.882813 13.871094 9.632813 13.289063 9.121094 13.082031 L 5.414063 11.582031 C 5.285156 11.53125 5.152344 11.507813 5.023438 11.511719 Z M 56.976563 11.511719 C 56.847656 11.507813 56.714844 11.53125 56.585938 11.582031 L 52.878906 13.082031 C 52.367188 13.289063 52.117188 13.871094 52.324219 14.386719 C 52.480469 14.773438 52.859375 15.011719 53.253906 15.011719 C 53.378906 15.011719 53.503906 14.988281 53.625 14.9375 L 57.335938 13.4375 C 57.847656 13.234375 58.09375 12.648438 57.890625 12.136719 C 57.734375 11.753906 57.367188 11.519531 56.976563 11.511719 Z M 1 22 C 0.449219 22 0 22.449219 0 23 C 0 23.550781 0.449219 24 1 24 L 7 24 C 7.550781 24 8 23.550781 8 23 C 8 22.449219 7.550781 22 7 22 Z M 55 22 C 54.449219 22 54 22.449219 54 23 C 54 23.550781 54.449219 24 55 24 L 61 24 C 61.550781 24 62 23.550781 62 23 C 62 22.449219 61.550781 22 61 22 Z M 27 26 C 26.746094 26 26.488281 26.097656 26.292969 26.292969 C 25.902344 26.683594 25.902344 27.316406 26.292969 27.707031 L 28.292969 29.707031 C 28.488281 29.902344 28.742188 30 29 30 C 29.257813 30 29.511719 29.902344 29.707031 29.707031 C 30.097656 29.316406 30.097656 28.683594 29.707031 28.292969 L 27.707031 26.292969 C 27.511719 26.097656 27.253906 26 27 26 Z M 35 26 C 34.746094 26 34.488281 26.097656 34.292969 26.292969 L 30.292969 30.292969 C 30.105469 30.480469 30 30.734375 30 31 L 30 37 C 30 37.550781 30.449219 38 31 38 C 31.550781 38 32 37.550781 32 37 L 32 31.414063 L 35.707031 27.707031 C 36.097656 27.316406 36.097656 26.683594 35.707031 26.292969 C 35.511719 26.097656 35.253906 26 35 26 Z M 8.765625 30.988281 C 8.632813 30.988281 8.5 31.011719 8.375 31.0625 L 4.664063 32.5625 C 4.152344 32.765625 3.90625 33.351563 4.109375 33.863281 C 4.269531 34.253906 4.644531 34.488281 5.039063 34.488281 C 5.164063 34.488281 5.292969 34.464844 5.414063 34.417969 L 9.121094 32.917969 C 9.632813 32.710938 9.882813 32.128906 9.675781 31.613281 C 9.519531 31.230469 9.152344 30.996094 8.765625 30.988281 Z M 53.234375 30.992188 C 52.847656 31 52.480469 31.234375 52.324219 31.617188 C 52.117188 32.128906 52.367188 32.714844 52.878906 32.921875 L 56.585938 34.417969 C 56.707031 34.46875 56.835938 34.488281 56.960938 34.488281 C 57.355469 34.488281 57.730469 34.253906 57.890625 33.863281 C 58.09375 33.351563 57.847656 32.769531 57.335938 32.5625 L 53.625 31.0625 C 53.5 31.011719 53.367188 30.988281 53.234375 30.992188 Z M 24 46 L 38 46 L 38 47.117188 L 24 48.867188 Z M 38 49.132813 L 38 51 C 38 51.039063 37.988281 51.078125 37.988281 51.121094 L 27.832031 52.390625 C 27.285156 52.457031 26.898438 52.957031 26.96875 53.503906 C 27.03125 54.011719 27.460938 54.378906 27.957031 54.378906 C 28 54.378906 28.039063 54.378906 28.082031 54.371094 L 37.46875 53.199219 C 36.652344 54.851563 34.964844 56 33 56 L 29 56 C 26.242188 56 24 53.757813 24 51 L 24 50.882813 Z M 30 58 L 32 58 L 32 59 L 30 59 Z"></path>
            </svg>
          </div>
          <div className="features__text">
            <h3>Ideas</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="features__card">
          <div className="features__icon">
            <svg
              className="features__icon--svg"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 481.053 481.053"
            >
              <path d="M 169.11914 0 C 161.46908 0.024136963 153.85859 1.9494531 147.67578 6.6660156 C 124.10478 24.644016 144.92963 61.022953 126.76562 89.751953 C 121.37363 98.281953 113.18119 105.23181 102.36719 110.50781 C 98.627188 96.986812 86.221344 87.027344 71.527344 87.027344 L 32.527344 87.027344 C 14.882344 87.027344 0.52734375 101.38234 0.52734375 119.02734 L 0.52734375 273.02734 C 0.52734375 290.67234 14.882344 305.02734 32.527344 305.02734 L 71.527344 305.02734 C 89.172344 305.02734 103.52734 290.67234 103.52734 273.02734 L 103.52734 127.51367 C 119.93234 120.74967 132.29311 110.94873 140.28711 98.302734 C 160.55011 66.251734 143.41891 30.036719 157.37891 19.386719 C 165.01091 13.565719 178.59097 16.299563 185.79297 20.101562 C 197.96997 26.528562 205.93408 43.031922 206.58008 63.169922 C 206.72208 67.585922 210.44603 71.051203 214.83203 70.908203 C 219.24803 70.766203 222.71327 67.07225 222.57227 62.65625 C 221.72927 36.39225 210.77372 15.194172 193.26172 5.9511719 C 186.51006 2.3875469 177.78921 -0.027355225 169.11914 0 z M 179.52734 96.027344 C 175.10934 96.027344 171.52734 99.609344 171.52734 104.02734 C 171.52734 108.44534 175.10934 112.02734 179.52734 112.02734 L 289.91016 112.02734 C 294.45716 112.02734 298.69294 113.83705 301.83594 117.12305 C 311.81694 127.56205 304.42716 145.02734 289.91016 145.02734 L 249.52734 145.02734 C 245.10934 145.02734 241.52734 148.60934 241.52734 153.02734 C 241.52734 157.44534 245.10934 161.02734 249.52734 161.02734 L 287.72656 161.02734 C 297.12056 161.02734 304.62998 168.84272 304.20898 178.26172 L 304.16406 179.26172 C 303.77006 188.10272 296.53064 195.02734 287.68164 195.02734 L 249.52734 195.02734 C 245.10934 195.02734 241.52734 198.60934 241.52734 203.02734 C 241.52734 207.44534 245.10934 211.02734 249.52734 211.02734 L 282.84375 211.02734 C 292.89075 211.02734 300.60178 219.93805 299.17578 229.87305 L 299.03125 230.87109 C 297.87225 238.94109 290.85222 245.02734 282.69922 245.02734 L 219.52539 245.02734 C 215.10739 245.02734 211.52539 248.60934 211.52539 253.02734 C 211.52539 257.44534 215.10739 261.02734 219.52539 261.02734 L 262.17578 261.02734 C 274.56678 261.02734 280.85086 275.82319 272.25586 284.74219 C 269.63086 287.46619 265.95778 289.02734 262.17578 289.02734 L 154.13281 289.02734 C 146.36581 289.02734 138.64469 287.08048 131.80469 283.39648 C 127.91569 281.30248 123.06475 282.75844 120.96875 286.64844 C 118.87375 290.53944 120.32875 295.38938 124.21875 297.48438 C 133.38175 302.41838 143.72581 305.02734 154.13281 305.02734 L 262.17578 305.02734 C 284.11478 305.02734 299.88797 281.49777 288.41797 260.50977 C 314.07997 255.86377 324.15581 223.80495 306.38281 205.12695 C 323.49881 193.09395 324.77772 167.97519 310.13672 153.99219 C 324.92872 142.24319 326.77444 120.04945 313.39844 106.06445 C 307.20844 99.591453 298.86616 96.027344 289.91016 96.027344 L 179.52734 96.027344 z M 32.527344 103.02734 L 71.527344 103.02734 C 80.349344 103.02734 87.527344 110.20534 87.527344 119.02734 L 87.527344 273.02734 C 87.527344 281.84934 80.349344 289.02734 71.527344 289.02734 L 32.527344 289.02734 C 23.705344 289.02734 16.527344 281.84934 16.527344 273.02734 L 16.527344 119.02734 C 16.527344 110.20534 23.705344 103.02734 32.527344 103.02734 z M 409.52734 176.02734 C 394.12534 176.02734 381.23117 186.96642 378.20117 201.48242 C 371.60517 194.55842 367.48358 189.72203 358.64258 184.58203 C 354.82658 182.36103 349.92512 183.65756 347.70312 187.47656 C 345.48212 191.29556 346.77766 196.19306 350.59766 198.41406 C 357.92166 202.67506 359.75039 205.3107 377.52539 223.9707 L 377.52539 353.54297 C 361.11839 360.30697 348.75867 370.10891 340.76367 382.75391 C 320.50067 414.80391 337.63383 451.01897 323.67383 461.66797 C 316.04283 467.49097 302.46377 464.75612 295.25977 460.95312 C 283.83377 454.92212 276.14064 440.24164 274.68164 421.68164 C 274.33464 417.27764 270.48712 414.00203 266.07812 414.33203 C 261.67413 414.67903 258.38447 418.53055 258.73047 422.93555 C 260.62347 446.99655 271.48797 466.49752 287.79297 475.10352 C 301.62897 482.40652 320.91091 483.90067 333.37891 474.38867 C 357.01891 456.35667 336.07311 420.11269 354.28711 391.30469 C 359.67911 382.77469 367.87155 375.82483 378.68555 370.54883 C 382.42555 384.06983 394.83139 394.02734 409.52539 394.02734 L 448.52539 394.02734 C 466.17039 394.02734 480.52539 379.67234 480.52539 362.02734 L 480.52539 208.02734 C 480.52739 190.38134 466.17234 176.02734 448.52734 176.02734 L 409.52734 176.02734 z M 409.52734 192.02734 L 448.52734 192.02734 C 457.34934 192.02734 464.52734 199.20534 464.52734 208.02734 L 464.52734 362.02734 C 464.52734 370.84934 457.34934 378.02734 448.52734 378.02734 L 409.52734 378.02734 C 400.70534 378.02734 393.52734 370.84934 393.52734 362.02734 L 393.52734 208.02734 C 393.52734 199.20534 400.70534 192.02734 409.52734 192.02734 z M 191.14258 320.02734 C 173.71258 320.02734 159.45178 333.66708 158.67578 351.08008 C 157.85178 369.56508 172.57158 385.02734 191.14258 385.02734 L 301.52734 385.02734 C 305.94534 385.02734 309.52734 381.44534 309.52734 377.02734 C 309.52734 372.60934 305.94534 369.02734 301.52734 369.02734 L 191.14258 369.02734 C 181.74958 369.02734 174.23916 361.21097 174.66016 351.79297 C 175.05416 342.95197 182.29358 336.02734 191.14258 336.02734 L 231.52539 336.02734 C 235.94339 336.02734 239.52539 332.44534 239.52539 328.02734 C 239.52539 323.60934 235.94339 320.02734 231.52539 320.02734 L 191.14258 320.02734 z"></path>
            </svg>{' '}
          </div>
          <div className="features__text">
            <h3>Feedback</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
