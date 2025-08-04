fetch("http://betam.taoyuewenhua.com/ajax/book?sourceName=tf&sourceId="+window.location.search.split("=")[1]).then(res=>res.json()).then(res1=>{
    console.log(res1)
    var content=document.querySelector('.xuanran')
    content.innerHTML=`
            <div class="intro">
            <img src="${res1.data.bigCoverUrl}" alt="">
            <div class="right">
                <h2>${res1.data.title}</h2>
                <p>作者: ${res1.data.authorName}</p>
                <p>${res1.data.categoryName}/暂无</p>
                <p style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">最新: ${res1.data.latestChapter}</p>
                <p>${Math.floor(res1.data.allWords/10000)}万字</p>
            </div>
        </div>
        <div class="read">
            <div>立即阅读</div>
        </div>
        <div class="title">
            <div class="title-box">
                <div class="div1">
                    <i></i>
                    <h2>查看目录</h2>
                    <p>已完结</p>
                </div>
                <div class="div2">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAYAAAABmx/yAAAAAXNSR0IArs4c6QAAAeNJREFUOBGNk8lKw1AUhpvbCYoVtQsXIs4TiguhsfZdXPoAnbt117nPILjxPawdfAFRwVnBWkFEaEsH/1NyQhJjmsDlJrnnv99/zzlXKhQKm/1+/0wIEU4kEj8Om4+A6GQ4HO72er27crm8bFPnEC6X6xDBrcFgMNVut2v5fH7JjljEYrFrj8cTcjqd36BPY9RAXhwnFhQQjUZvccYQ6F+wPNPpdOo4+4KVWNIu5nK5NViuQ+yHg5YkSXI6nX7UxvD7iMgfyWTyBsEHIJPtAJLWKBaL87yunXVEXqASgVrFmMAmH9gsmEqlnnmdZh2RF+Lx+BWCw0SGOAD7jVKpNMfrNJsSOSCbzW7BbhW2fThzE9mXkciXsUIKyGQy25gqLFZsv1oSSUgPmmIHwnNF/O71eoO2hCRWyJd49YB6aktoRjTNKhH4IZLGZhM0ORKJvFkSOasoiY/qiawGOav/EhVRhUQohU5EbkyF1Dmo3wVEfpBauABq/fgIf6yCtEFFJxE1OtnD1XtiAc86Ihp6nUl8O8xEJFaJypWqgTQJe58YMnr2gQnGeUREA6+ikVUROmPfSkSbCJBWut2uKoLFEOp0byQYv1040xF+BmDNgUTscZ2MgcZv4Xa7j9ENDZBm7Ypok1+m+wfM2SzVOwAAAABJRU5ErkJggg=="
                        alt="">
                </div>
            </div>
        </div>
        <div class="title2">
            <div class="title2-box">
                <i></i>
                <h2>内容简介</h2>
            </div>
            <div class="content">
                <p>${res1.data.intro.split('\n　　').join('').trim()}
                </p>
            </div>
        </div>
    `
}).catch(err=>{
    console.log(err)
})
function fanhui(){
    window.history.back()
}