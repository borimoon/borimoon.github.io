var arrLang = {
  'hu': {
    'toggle-menu': 'menü',
    'menuitem-1': 'rólunk',
    'menuitem-2': 'munkáink',
    'main': 'mi vagyunk a winkler',
    'quote': 'gondolkodjunk együtt előremutató megoldásokon',
    'act-head-1': 'Tervezünk és újragondolunk',
    'act-text-1': 'Print és online felületeket készítünk, amelyek segítenek neked a lehető legjobb ügyfélélmény elérésében.',
    'act-head-2': 'Márkát építünk',
    'act-text-2': 'Megoldásokat kutatunk, hogyan tedd még vonzóbbá és könnyebben használhatóvá szolgáltatásodat ügyfeleid számára.',
    'act-head-3': 'Nagy adatmennyiségből készítünk kiadványokat',
    'act-text-3': 'Átgondolt és kipróbált automatizálási folyamataink segítségével pontosan és gyorsan készítünk kiadványokat.',
    'recent-work': 'legújabb munkáink',
    'ref-1': 'Rossmann akciós magazin',
    'ref-desc-1': '',
    'ref-2': 'Kentaur magazin',
    'ref-desc-2': '',
    'ref-3': 'Üzleti Rendszerek rebranding',
    'ref-desc-3': '',
    'team-head': 'a csapat',
    'guszti': 'Szakács Gusztáv Bálint',
    'guszti-tags': '#can-do-attitude #kertészkedés #kommunikáció #felhasználóközpontú #design',
    'dani': 'Taskó Dániel',
    'dani-tags': '#felhasználóközpontú_tervezés #újragondolás #vizualizáció #unikornis',
    'eszter': 'Tatay Eszter',
    'eszter-tags': '#tipográfia #fantasy #fotomanip #StephenKing #retus',
    'andris': 'Demcsák András',
    'andris-tags': '#hézagmentesillesztés #éjszakaiműszak #solutioneer #transporter #kütyük',
    'bori': 'Ficzere Adrienn',
    'bori-tags': '#Front-end-design #kutatás #gondolatolvasás #britpop',
    'balu': 'Pesti Balázs',
    'balu-tags': '',
    'contact-head': 'kapcsolat',
    'location': 'Találj meg!',
    'agency': 'Stenzel kreatívügynökség',
    'address': '1111 Budapest, Lágymányosi utca 20.',
    'contact': 'Beszélgessünk!',
    'international': 'Nemzetköziek vagyunk',
    'winklergroup': 'A Winkler&Stenzel csoport'
  },

  'en': {
    'toggle-menu': 'menu',
    'menuitem-1': 'about',
    'menuitem-2': 'work',
    'main': 'we are winkler',
    'quote': 'we are hard working and easy going',
    'act-head-1': 'Design & rethink',
    'act-text-1': 'We design for print and online helping you and your customers to achieve the best user experience.',
    'act-head-2': 'Branding',
    'act-text-2': 'We are looking for solutions to do your service more efficient.',
    'act-head-3': 'We create stunnig layouts from big data',
    'act-text-3': 'Átgondolt és kipróbált automatizálási folyamataink segítségével pontosan és gyorsan készítünk kiadványokat.',
    'recent-work': 'recent work',
    'ref-1': 'Rossmann discount magazine',
    'ref-desc-1': '',
    'ref-2': 'Kentaur magazine',
    'ref-desc-2': '',
    'ref-3': 'System Developers rebranding',
    'ref-desc-3': '',
    'team-head': 'the team',
    'guszti': 'Gusztav Balint Szakacs',
    'guszti-tags': '#can-do-attitude #gardening #communication #user-centered #design',
    'dani': 'Daniel Tasko',
    'dani-tags': '#user-centered-design #rethink #visualization #unicorn',
    'eszter': 'Eszter Tatay',
    'eszter-tags': '#typography #fantasy #photomanip #StephenKing #retouch',
    'andris': 'Andras Demcsak',
    'andris-tags': '#hézagmentesillesztés #éjszakaiműszak #solutioneer #transporter #kütyük',
    'bori': 'Adrienn Ficzere',
    'bori-tags': '#front-end-design #research #mind-reading #britpop',
    'balu': 'Balazs Pesti',
    'balu-tags': '',
    'contact-head': 'contact',
    'location': 'Find us!',
    'agency': 'Stenzel creative group',
    'address': '20. Lágymányosi str., Budapest 1111',
    'contact': 'Contact us!',
    'international': 'We are international',
    'winklergroup': 'Winkler&Stenzel group'
  },

  'de': {

  }
};

$(function () {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});
