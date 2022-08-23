let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discordapp.com/users/411436556792889356';
      break;
    case 'github':
      url = 'https://github.com/SkriptError';
      break;
    case 'twitter':
      url = 'https://twitter.com/SkriptError';
      break;
  }

  window.open(url);
}

function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('Hello! my name is William and I am a AI Created by Daniel S Norstrom or his internet name <b>(SKRIPTERROR)</b>', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type('I William am still in development and is a WIP (Work in Progress) Soon I will have more capablitys to respond to messages and questions you may have but for right now I am just text on a screen until I have a Fully Coded API but thanks for your intrest.', { delay: 1200 })

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['Web Developer...', 'I play Minecraft...', 'Soon to be C++ Developer!', 'Owner | Apollo Cheats', 'Co-Founder | GMGLLC', 'You are still here?', 'Ok Fine I am making a AI Called William thats gonna have machine learning.'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});
