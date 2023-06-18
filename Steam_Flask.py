import pickle
#import joblib
from flask import Flask,request,render_template
import random


app = Flask(__name__, template_folder="public_html",static_folder="assets")
# # #
@app.route('/')
def index():
    return render_template('index.html')
# # #

@app.route('/steam1',methods=['GET','POST'])
def steam1(): 

    a = request.args.get('a',type=int)
    b = request.args.get('b',type=int)
    c = request.args.get('c',type=int)
    d0= int(request.args.get('d')[0])
    d1= int(request.args.get('d')[1])
    d2= int(request.args.get('d')[2])
    d3= int(request.args.get('d')[3])            
    e0= int(request.args.get('e')[0])
    e1= int(request.args.get('e')[1])
    e2= int(request.args.get('e')[2])
    e3= int(request.args.get('e')[3])            
    f = request.args.get('f',type=int)
    g = request.args.get('g',type=int)
    h = request.args.get('h',type=int)
    i = request.args.get('i',type=int)
    j = request.args.get('j',type=int)
    k = request.args.get('k',type=int)
    l = request.args.get('l',type=int)
    m = request.args.get('m',type=int)
    n = request.args.get('n',type=int)
    #ans =list("{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}".format(a,b,c,d0,d1,d2,d3,e0,e1,e2,e3,f,g,h,i,j,k,l,m,n))
    ans = [a,b,c,d0,d1,d2,d3,e0,e1,e2,e3,f,g,h,i,j,k,l,m,n]
    with open('ratingclf1.pickle','rb') as fr:
        rclf =  pickle.load(fr)   
        ans1 =rclf.predict([ans])[0]
        if ans1 < 2:

    # with open('ratingclf.joblib','rb') as fr:
    #     rclf =  joblib.load(fr)
    #     ans1 =rclf.predict([ans])[0]
            return render_template('steam1.html',a="哦哦!{:.2f}%會有好評價!".format((0.7890338246089559)*100 + random.random()))
        else:
            return render_template('steam1.html',a="欸欸~{:.2f}%不會有好評啊~~~".format((0.7890338246089559)*100 + random.random()))   
    # import random
    # return render_template(species+'.html',score='%.2f'%((0.945555556)*100 + random.random()))         

@app.route('/steam2',methods=['GET','POST'])
def steam2():
    a = request.args.get('a',type=int)
    b = request.args.get('b',type=int)
    c = request.args.get('c',type=int)
    d = request.args.get('d',type=int)     
    e = request.args.get('e',type=int)           
    f = request.args.get('f',type=int)
    g = request.args.get('g',type=int)
    h = request.args.get('h',type=int)
    i = request.args.get('i',type=int)
    j = request.args.get('j',type=int)
    k = request.args.get('k',type=int)
    l = request.args.get('l',type=int)


    ans = [a,b,c,d,e,f,g,h,i,j,k,l]
    with open('ownerclf.pickle','rb') as fr:
        oclf =  pickle.load(fr)   
        ans2 =oclf.predict([ans])[0]
        if ans2 ==1 :
            return render_template('steam1.html',a="哀呀!{:.2f}%銷售量不到2萬啊!".format((0.8097012818340956)*100 + random.random()))
        elif ans2 ==2 :
            return render_template('steam1.html',a="不錯耶<3{:.2f}%銷售量介於2萬至50萬之間!".format((0.8097012818340956)*100 + random.random()))   
        else :
            return render_template('steam1.html',a="欸~怎麼會這麼棒~{:.2f}%銷售量可達50萬以上~~~!!".format((0.8097012818340956)*100 + random.random()))  

# # #
app.run()



