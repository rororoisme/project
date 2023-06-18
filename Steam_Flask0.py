from flask import Flask,request,render_template
import pickle
#import lightgbm
app = Flask(__name__, template_folder="public_html",static_folder="assets")
# # #
@app.route('/')
def index():
    return render_template('index.html')
# # #

@app.route('/steam1')
def steam1():
    a = request.values.get('a',type=int)
    b = request.values.get('b',type=int)
    c = request.values.get('c',type=int)
    d = request.values.get('d')
    e = request.values.get('e')
    f = request.values.get('f',type=int)
    g = request.values.get('g',type=int)
    h = request.values.get('h',type=int)
    i = request.values.get('i',type=int)
    j = request.values.get('j',type=int)
    k = request.values.get('k',type=int)
    l = request.values.get('l',type=int)
    m = request.values.get('m',type=int)
    n = request.values.get('n',type=int)
    ans=a,b,c,d[0],d[1],d[2],d[3],e[0],e[1],e[2],e[3],f,g,h,i,j,k,l,m,n
    with open('ratingclf.pickle','rb') as fr:
        clf =  pickle.load(fr)
        #clf.predict([[ans]])[0]
    return print(clf.predict([[ans]])[0])
    #return render_template('steam1.html')
@app.route('/steam2')
def steam2():
    return render_template('steam2.html')
# # #
app.run()

# from flask import Flask,request,render_template,jsonify
# import pickle
# app = Flask(__name__)
# # # #

# @app.route('/')
# def index():
#     with open('clf.pickle','rb') as fr:
#         clf = pickle.load(fr)
#     a = request.values.get('a',type=float)
#     b = request.values.get('b',type=float)
#     c = request.values.get('c',type=float)
#     d = request.values.get('d',type=float)
#     return clf.predict([[a,b,c,d]])[0]

# # # #
# app.run()

