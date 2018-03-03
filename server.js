var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles
{
            'Article-one':
            {
                title:'Article One : Navdeep Sharma',
                heading:'Article:WEB APPS',
                date:'July 24,1999',
                content:`<p>There are essentially two ways to deliver an application on Android: as a client-side application (developed using the Android SDK and installed on user devices in an APK) or as a web application (developed using web standards and accessed through a web browser—there's nothing to install on user devices)
                </p>
                    
                    <p>If you chose to provide a web-based app for Android-powered devices, you can rest assured that major web browsers for Android (and the WebView framework) allow you to specify viewport and style properties that make your web pages appear at the proper size and scale on all screen configurations.
                    </p>
                    
                    <p>Figure 1 illustrates how you can provide access to your web pages from either a web browser or your your own Android app. However, you shouldn't develop an Android app simply as a means to view your web site. Rather, the web pages you embed in your Android app should be designed especially for that environment. You can even define an interface between your Android application and your web pages that allows JavaScript in the web pages to call upon APIs in your Android application—providing Android APIs to your web-based application.</p>`
            },
            'Article-two' :
            {
    
                title:'Article:Navdeep Sharma',
                heading:' Article: Cloud Computing',
                date:'  Feb 20,2018',
                content:
                ` <h4> WHAT IS CLOUD COMPUTING?</h4> 
                    <p>Cloud Computing describes a scenario whereby computing resource is delivered as a service over a network connection, usually the internet.</p>
                    
                    <p>Cloud computing relies on sharing a pool of physical and/or virtual resources, rather than deploying local or personal hardware and software. It is somewhat synonymous with the term ‘utility computing’, as users are able to tap into a supply of computing resource rather than manage the equipment needed to generate it themselves.</p> 
                        </div>`
                
            }
};
function createTemplate1(data)
{
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmltemplate1=
    `<html>
      <Head>
        <title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet"> 
        </Head>
      <Body>
          <div class="container">
                <div>
                  <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                  ${heading}
                </h3>
                <div>
                ${date}
                </div>
                <div>
                  ${content}
            <a href="http://navdeepsharma8594.imad.hasura-app.io/Article-two">Article two</a>
            <input type=Button value="Article two"><a href="http://navdeepsharma8594.imad.hasura-app.io/Article-two"></a>
            </div>
        </div>
        
      </Body>
    </html>
    `;
    return htmltemplate1;
}

function createTemplate2(data1)
{
    var title = data1.title;
    var date = data1.date;
    var heading = data1.heading;
    var content = data1.content;
    
var htmltemplate2=
`<html>
  <Head>
    <title>${title}</title>
  <link href="/ui/style.css" rel="stylesheet">
  </Head>
  <Body>
      <div class="container">
            <div>
              <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
              ${heading}
            </h3>
            <div>
            ${date}
            </div>
            <div>
            ${content}
            </div>
    </div>
  </Body>
</html>
`;
return htmltemplate2;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:ArticleName', function (req, res) {
    var articlename=req.parse.ArticleName;
  res.send(createTemplate1(articles[ArticleName]));
  res.send(createTemplate2(articles.[ArticleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
