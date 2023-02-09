import React, { useEffect } from 'react'
import { useState } from 'react'

const AdditiveCipherDecrypt = () => {
    const [parameters, setParameters] = useState({key:0, additivecipherText:""})
    const [plaintext, setPlainText] = useState("")
    const letterFreq = {
        a : 8.2,
        b : 1.5,
        c : 2.8,
        d : 4.3,
        e : 13,
        f : 2.2,
        g : 2,
        h : 6.1,
        i : 7,
        j : 0.15,
        k : 0.77,
        l : 4,
        m : 2.4,
        n : 6.7,
        o : 7.5,
        p : 1.9,
        q : 0.095,
        r : 6,
        s : 6.3,
        t : 9.1,
        u : 2.8,
        v : 0.98,
        w : 2.4,
        x : 0.15,
        y : 2,
        z : 0.074
    }
    // e t a o n s

    // console.log(letterFreq.a)
    let OrgString = "";
    let Org = "";
    const onchange = (e) => {
        setParameters({...parameters, [e.target.name] : e.target.value})
        // let str = "inthenameoftheorganisation";
        // setParameters({cipherText : Org})
    }
    let totalChar = 0;

    const CipherOnchange = () => {
        setPlainText(OrgString)
    }

    let maxFreqLetter = ["e","t","a", "s", "o","n","r","h","i","d"]
    useEffect(() => {
        let obj = {};
        let lowerCipher = parameters.additivecipherText.toString().toLowerCase()
        console.log(lowerCipher)
        for(let i=0;i<parameters.additivecipherText.length;i++)
        {     
            if(obj[lowerCipher[i]]==undefined)
            {
                obj[lowerCipher[i]]=1;

            }
            else
            {
                obj[lowerCipher[i]]+=1;
            }
            totalChar++;
        }

        console.log(obj[" "])
        if (obj[" "]) {
            totalChar-= obj[" "]
            delete obj[" "]
            
        }
        if (obj["."]) {
            totalChar-= obj["."]
            delete obj["."]
            
        }
        if (obj["-"]) {
            totalChar-= obj["-"]
            delete obj["-"]
            
        }
        if (obj[","]) {
            totalChar-= obj[","]
            delete obj[","]
            
        }
        console.log(totalChar)

        console.log(obj);
        
        let letterFreqInCipher = {}

        for(let i=0;i<parameters.additivecipherText.length;i++)
        {     
            if(obj[lowerCipher[i]]==undefined)
            {
                letterFreqInCipher[lowerCipher[i]]=0;
            }
            else
            {
                letterFreqInCipher[lowerCipher[i]] = obj[lowerCipher[i]] * 100 /totalChar;
            }
        }

       let  keysSorted = Object.keys(letterFreqInCipher).sort(function(a,b){return letterFreqInCipher[b]-letterFreqInCipher[a]})

      console.log(letterFreqInCipher)

      console.log(keysSorted)
      
        if (parameters.additivecipherText.length) {
            for (let index = 0; index < maxFreqLetter.length; index++) {
            
            let keyBe = maxFreqLetter[index].charCodeAt(0)- keysSorted[0].charCodeAt(0) 
            console.log(keyBe)
            keyBe >= 0 ? keyBe = keyBe : keyBe= 26 + keyBe

            for (let index = 0; index < parameters.additivecipherText.length; index++) {
                let ascii = parameters.additivecipherText.charCodeAt(index)
                let shifted = ""

                if(97 <= ascii && ascii <= 122){
                    ascii + keyBe>122 ? ascii = 96+ (ascii +keyBe-122) :ascii= ascii + keyBe
                    // ascii - keyBe>122 ? ascii = 122- 96- (ascii -keyBe) :ascii-keyBe > 96 ? ascii= ascii - keyBe : ascii = 122 - (96 -(ascii-keyBe))
                    shifted = String.fromCharCode(ascii)
                    Org = Org.concat(shifted) 
                }
                else if(ascii>=65 && ascii <=90){
                    ascii + keyBe>90 ? ascii = 64+ (ascii+keyBe-90) :ascii= ascii + keyBe
                    // ascii - keyBe>90 ? ascii = 65+ (ascii -keyBe-90) :ascii-keyBe > 65 ? ascii= ascii - keyBe : ascii = 90 - (64 -(ascii-keyBe))
                    shifted = String.fromCharCode(ascii)
                    Org = Org.concat(shifted)
                }
                // if(ascii>=65 && ascii <=90){
                //     // console.log(ascii)
                //     // console.log(ascii + parseInt(parameters.key))
                //     ascii + parseInt(parameters.key)>90 ? ascii = 64+( (ascii +parseInt(parameters.key))-90) :ascii= ascii+parseInt(parameters.key)
                //     // console.log(ascii)
                //     shifted = String.fromCharCode(ascii)
                //     // console.log(shifted)
                //     Org = Org.concat(shifted)
                // }
                // else if(ascii>=97 && ascii <=122){
                //     // ascii + parseInt(parameters.key)>122 ? ascii = 97+( (ascii +parseInt(parameters.key))-122) :ascii= ascii+parseInt(parameters.key)
                //     // shifted = String.fromCharCode(ascii)
                //     // Org = Org.concat(shifted)
                // }
                else{
                    Org = Org.concat(parameters.additivecipherText[index])   
                }
                OrgString = Org
            }

            Org = Org.concat("\n")   
        
            console.log(Org)
        }

        }
    CipherOnchange()
    
    }, [parameters.key, parameters.additivecipherText, plaintext])
    

    return (
        <div>
            <h2>Convert Additive Cipher Text to Plain Text</h2>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Decrypt Additive Cipher Text</h5>
                    <div className="mb-3">
                    <label htmlFor="additivecipherText" className="form-label">Write Cipher Text Here......</label>
                    <textarea className="form-control" id="additivecipherText" rows="3" value={parameters.additivecipherText} name="additivecipherText" onChange={onchange}></textarea>
                </div>
                {/* <label htmlFor="key"></label>
                <p>Key <input name="key" id="key" type="range" min="0" max="25" value={parameters.key} onChange={onchange}></input> {parameters.key} </p> */}
                </div>
            </div>

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Expected Results in Plain Text</h5>
                    <pre className="card-text" onChange={onchange}>{plaintext}</pre>
                </div>
            </div>
        </div>
  )
}

export default AdditiveCipherDecrypt