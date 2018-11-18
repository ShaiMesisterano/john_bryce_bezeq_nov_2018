<h1>Homework for John Bryce Bezeq course - November 2018</h1>
<h3>18/11/2018</h3>
<ol>
    <li>
        Every request should be passed through a custom middleware which logs to a file the current date and the request details (query and body).
    </li>
    <li>Pictures REST API (Using Express.js):
        <ul>
            <li>
                <p><code>GET: http://localhost:8080/pictures</code></p>
                <p>should return</p>
                <code>Array of pictures</code>
                <p>Example:</p>
                <code>[
    'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYqJCM5nbNAk9Z4C3rybPQFic9USLCCrIXejIgInn1L9bdHKu',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE0iXm3ChXIonp7e0SaitdYMCK59OEN4MNQ7nldYAFoxvlp8b'
];</code>
            </li>
            <li>
                <p><code>POST: http://localhost:8080/pictures</code></p>
                <p><code>BODY: {url: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=350'}</code></p>
                <p>Adds the url as an item to the array. Should return 'Success'</p>
            </li>
            <li>
                <p><code>GET: http://localhost:8080/pictures/:index</code></p>
                <p>Should return the picture of index "index"</p>
            </li>
        </ul>
    </li>
</ol>