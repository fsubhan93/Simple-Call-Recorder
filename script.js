body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
}

.status {
    padding: 10px;
    margin: 15px 0;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    background-color: #ecf0f1;
}

.controls, .recording-controls {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}

.recordings-list {
    margin-top: 30px;
}

.recordings-list h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

#recordings {
    list-style-type: none;
    padding: 0;
}

#recordings li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
}

#recordings li a {
    color: #3498db;
    text-decoration: none;
}

#recordings li a:hover {
    text-decoration: underline;
}

.call-active {
    background-color: #2ecc71 !important;
    color: white;
}

.call-outgoing {
    background-color: #e67e22 !important;
    color: white;
}

.recording-active {
    background-color: #e74c3c !important;
    color: white;
}