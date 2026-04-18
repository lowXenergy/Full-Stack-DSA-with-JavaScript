let hero = React.createElement('div',{className:'hero'},
  React.createElement('div',{className:'left'},

    React.createElement('div',{className:'vertical'},
      React.createElement('span',{},'Product designer'),
      React.createElement('div',{className:'line'}),
      React.createElement('span',{className:'year'},'2024')
    ),

    React.createElement('div',{className:'content'},

      React.createElement('div',{className:'stats'},
        React.createElement('div',{},
          React.createElement('h2',{},'+200'),
          React.createElement('p',{},'Project completed')
        ),
        React.createElement('div',{},
          React.createElement('h2',{},'+50'),
          React.createElement('p',{},'Startup raised')
        )
      ),

      React.createElement('h1',{},'Hello'),
      React.createElement('p',{className:'subtitle'},'— It’s D.Nova a design wizard'),
      React.createElement('p',{className:'scroll'},'Scroll down ↓')
    )
  ),

  React.createElement('div',{className:'right'},
    React.createElement('img',{
    //   src:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    src:'https://i.pinimg.com/1200x/7f/aa/74/7faa7494736538390935e6dd5d937380.jpg',
      alt:'profile'
    })
  )
);

const body = () => {
  return React.createElement('div',{}, hero);
};

export default body;