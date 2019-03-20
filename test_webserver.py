import BaseHTTPServer, SimpleHTTPServer
import ssl

# 0.0.0.0 allows connections from anywhere
httpd = BaseHTTPServer.HTTPServer(('0.0.0.0', 443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./newkey.crt', keyfile='./newkey.key', server_side=True)
httpd.serve_forever()
