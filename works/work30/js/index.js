fetch("http://betam.taoyuewenhua.com/ajax/book_mall?ctype=1&seed=8443&page=0").then(res=>res.json()).then(res1=>{
    console.log(res1)
   var div=document.querySelector('.content')
        res1.data.channelList.forEach(function(item,index){
            if(index==0){
                var ul=''
                item.bookList.forEach(function(list){
                    ul+=`
                    <li onclick="jump('${list.sourceId}')">
                        <img src="${list.coverUrl}" alt="">
                        <p class="intro-first">${list.intro}</p>
                        <p class="author-first">${list.authorName}</p>
                    </li>
                    `
                })
                div.innerHTML+=`
                <div class="box">
                    <div class="title-box">
                        <div class="left-titleBox">
                            <p class="line"></p>
                            <p class="title-left">${item.title}</p>
                        </div>
                        <div class="right-titleBox">
                            <p class="title-right">查看更多</p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAAAXNSR0IArs4c6QAAAeNJREFUOBGNk8lKw1AUhpvbCYoVtQsXIs4TiguhsfZdXPoAnbt117nPILjxPawdfAFRwVnBWkFEaEsH/1NyQhJjmsDlJrnnv99/zzlXKhQKm/1+/0wIEU4kEj8Om4+A6GQ4HO72er27crm8bFPnEC6X6xDBrcFgMNVut2v5fH7JjljEYrFrj8cTcjqd36BPY9RAXhwnFhQQjUZvccYQ6F+wPNPpdOo4+4KVWNIu5nK5NViuQ+yHg5YkSXI6nX7UxvD7iMgfyWTyBsEHIJPtAJLWKBaL87yunXVEXqASgVrFmMAmH9gsmEqlnnmdZh2RF+Lx+BWCw0SGOAD7jVKpNMfrNJsSOSCbzW7BbhW2fThzE9mXkciXsUIKyGQy25gqLFZsv1oSSUgPmmIHwnNF/O71eoO2hCRWyJd49YB6aktoRjTNKhH4IZLGZhM0ORKJvFkSOasoiY/qiawGOav/EhVRhUQohU5EbkyF1Dmo3wVEfpBauABq/fgIf6yCtEFFJxE1OtnD1XtiAc86Ihp6nUl8O8xEJFaJypWqgTQJe58YMnr2gQnGeUREA6+ikVUROmPfSkSbCJBWut2uKoLFEOp0byQYv1040xF+BmDNgUTscZ2MgcZv4Xa7j9ENDZBm7Ypok1+m+wfM2SzVOwAAAABJRU5ErkJggg=="
                                alt="">
                        </div>
                    </div>
            <div class="first-box">
                <ul class="first-ul">
                   ${ul}
                </ul>
            </div>
        </div>
                
                `
            }else if(index==1){
                 var ul1=''
                item.bookList.forEach(function(listtwo){
                    ul1+=`
                <li onclick="jump('${listtwo.sourceId}')">
                    <div class="imgbox">
                        <img src="${listtwo.coverUrl}" alt="">
                    </div>
                    <div class="right-content">
                            <p class="rb-author">${listtwo.title}</p>
                            <p class="rb-intro">
                                ${listtwo.intro}
                            </p>
                            <div class="rb-bottom">
                                <p class="bottom-author">${listtwo.authorName}</p>
                                <p class="right-tog">
                                    <span class="gery">
                                        ${listtwo.recTitle.split('·')[2]}
                                    </span>
                                    <span class="gery">
                                        历史
                                    </span>
                                    <span class="orag">完结</span>
                                </p>
                            </div>
                    </div>
                </li>
                    `
                })
                
                div.innerHTML+=`
        <div class="second-box">
             <div class="title-box">
                <div class="left-titleBox">
                    <p class="line"></p>
                    <p class="title-left">${item.title}</p>
                </div>
                <div class="right-titleBox">
                    <p class="title-right">查看更多</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAAAXNSR0IArs4c6QAAAeNJREFUOBGNk8lKw1AUhpvbCYoVtQsXIs4TiguhsfZdXPoAnbt117nPILjxPawdfAFRwVnBWkFEaEsH/1NyQhJjmsDlJrnnv99/zzlXKhQKm/1+/0wIEU4kEj8Om4+A6GQ4HO72er27crm8bFPnEC6X6xDBrcFgMNVut2v5fH7JjljEYrFrj8cTcjqd36BPY9RAXhwnFhQQjUZvccYQ6F+wPNPpdOo4+4KVWNIu5nK5NViuQ+yHg5YkSXI6nX7UxvD7iMgfyWTyBsEHIJPtAJLWKBaL87yunXVEXqASgVrFmMAmH9gsmEqlnnmdZh2RF+Lx+BWCw0SGOAD7jVKpNMfrNJsSOSCbzW7BbhW2fThzE9mXkciXsUIKyGQy25gqLFZsv1oSSUgPmmIHwnNF/O71eoO2hCRWyJd49YB6aktoRjTNKhH4IZLGZhM0ORKJvFkSOasoiY/qiawGOav/EhVRhUQohU5EbkyF1Dmo3wVEfpBauABq/fgIf6yCtEFFJxE1OtnD1XtiAc86Ihp6nUl8O8xEJFaJypWqgTQJe58YMnr2gQnGeUREA6+ikVUROmPfSkSbCJBWut2uKoLFEOp0byQYv1040xF+BmDNgUTscZ2MgcZv4Xa7j9ENDZBm7Ypok1+m+wfM2SzVOwAAAABJRU5ErkJggg=="
                        alt="">
                </div>
            </div>
            <ul class="secondul">
                ${ul1}
            </ul>
        </div>
                `
            }else if(index==2){
                 var ul1=''
                item.bookList.forEach(function(listtwo){
                    ul1+=`
                <li onclick="jump('${listtwo.sourceId}')">
                    <div class="imgbox">
                        <img src="${listtwo.coverUrl}" alt="">
                    </div>
                    <div class="right-content">
                            <p class="rb-author">${listtwo.title}</p>
                            <p class="rb-intro">
                                ${listtwo.intro}
                            </p>
                            <div class="rb-bottom">
                                <p class="bottom-author">${listtwo.authorName}</p>
                                <p class="right-tog">
                                    <span class="gery">
                                        校园
                                    </span>
                                    <span class="gery">
                                        历史
                                    </span>
                                    <span class="orag">完结</span>
                                </p>
                            </div>
                    </div>
                </li>
                    `
                })
                
                div.innerHTML+=`
        <div class="second-box">
             <div class="title-box">
                <div class="left-titleBox">
                    <p class="line"></p>
                    <p class="title-left">${item.title}</p>
                </div>
                <div class="right-titleBox">
                    <p class="title-right">查看更多</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAAAXNSR0IArs4c6QAAAeNJREFUOBGNk8lKw1AUhpvbCYoVtQsXIs4TiguhsfZdXPoAnbt117nPILjxPawdfAFRwVnBWkFEaEsH/1NyQhJjmsDlJrnnv99/zzlXKhQKm/1+/0wIEU4kEj8Om4+A6GQ4HO72er27crm8bFPnEC6X6xDBrcFgMNVut2v5fH7JjljEYrFrj8cTcjqd36BPY9RAXhwnFhQQjUZvccYQ6F+wPNPpdOo4+4KVWNIu5nK5NViuQ+yHg5YkSXI6nX7UxvD7iMgfyWTyBsEHIJPtAJLWKBaL87yunXVEXqASgVrFmMAmH9gsmEqlnnmdZh2RF+Lx+BWCw0SGOAD7jVKpNMfrNJsSOSCbzW7BbhW2fThzE9mXkciXsUIKyGQy25gqLFZsv1oSSUgPmmIHwnNF/O71eoO2hCRWyJd49YB6aktoRjTNKhH4IZLGZhM0ORKJvFkSOasoiY/qiawGOav/EhVRhUQohU5EbkyF1Dmo3wVEfpBauABq/fgIf6yCtEFFJxE1OtnD1XtiAc86Ihp6nUl8O8xEJFaJypWqgTQJe58YMnr2gQnGeUREA6+ikVUROmPfSkSbCJBWut2uKoLFEOp0byQYv1040xF+BmDNgUTscZ2MgcZv4Xa7j9ENDZBm7Ypok1+m+wfM2SzVOwAAAABJRU5ErkJggg=="
                        alt="">
                </div>
            </div>
            <ul class="secondul">
                ${ul1}
            </ul>
        </div>
                `
            }   
        })  
})
function jump(id){
    window.location.href='detail.html?sourceid='+id
}