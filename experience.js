(() => {
  const bars = [8,16,12,25,18,32,14,22,38,17,29,12,34,19,26,10,20,14,30,9,17,11,24,8];
  const questions = [
    '第一次见到它，是在什么时候？',
    '你最常想起的，是和谁一起经历的那个瞬间？',
    '如果把这段记忆留给以后的人，你最希望他们记住什么？'
  ];
  const objectTimes = ['1986年','1992年冬天','1998年夏天','2001年','20世纪70年代末','1995年','1989年','2003年','2011年秋天'];
  const histories = {
    'object-0': {title:'那把一直没有丢掉的钥匙',deck:'门锁早已换过几次，但外婆玄关瓷碟里的旧钥匙，仍替一家人保管着回家的感觉。',paragraphs:[
      '这把钥匙原来属于外婆家的木门。小时候每次回去，我都会听见它在她围裙口袋里碰到硬币的声音。门很旧，锁芯也有些涩，外婆开门前总要轻轻往里推一下，再把钥匙向右转到底。',
      '后来房子重新装修，木门换成了防盗门，钥匙也失去了用途。大家收拾旧物时问过要不要扔掉，外婆却把它放回玄关的小瓷碟里。她说，东西有没有用，不只看它还能不能开门。',
      '如今瓷碟还在，钥匙表面已经磨得发亮。它打不开任何一扇现实里的门，却总能让人想起门后那盏提前亮起的灯。'
    ]},
    'object-1': {title:'杯沿缺口旁的一杯温水',deck:'一只普通的搪瓷杯，记录了每次回家时无需说明的照顾。',paragraphs:[
      '这只杯子最早放在厨房靠窗的位置，蓝色的边沿有一个小缺口。家里人都知道它不能盛太烫的水，却没有人舍得把它换掉。',
      '小时候放学回家，桌上常常已经有一杯温水。没有人特意说这是为谁准备的，但杯子的朝向、刚好的温度，都像一种沉默的招呼。',
      '多年以后，家里有了更漂亮的玻璃杯。搪瓷杯被收进柜子深处，可每次看到它，仍会记起有人提前算好归家的时间。'
    ]},
    'object-2': {title:'磁带的 B 面留下了我们的声音',deck:'歌曲会结束，但被意外录进去的说话声，让一个普通下午一直没有散场。',paragraphs:[
      '父亲喜欢把新买的磁带从头听到尾，A 面是他熟悉的歌，B 面有时会被拿来录广播。那台录音机的按键很重，按下去会发出清脆的机械声。',
      '有一次录音没有及时关掉，我们在客厅里说话、笑闹，连厨房里碗碟相碰的声音也被收了进去。后来再听，歌只占了前半段，真正让人舍不得倒带的却是后面的杂音。',
      '磁带已经无法稳定播放，但那段录音提醒我们：很多珍贵的东西，并不是在准备好以后才发生。'
    ]},
    'object-3': {title:'按下快门以前，大家靠得更近了一点',deck:'一台胶片相机留下的不只是照片，还有拍摄之前彼此靠近的动作。',paragraphs:[
      '相机是舅舅从外地带回来的。每次拍照前，他都要先看光线、转动镜头，再让我们往中间站一点。小孩子总是不耐烦，大人却愿意反复整理衣领。',
      '胶片只有有限的张数，所以每一次快门都显得郑重。有人闭眼、有人转头，也不能马上删除重来。正是这些不完美，让照片里的人比记忆更真实。',
      '现在再拿起相机，最先想起的不是成片，而是快门落下前，大家为了进入同一个画面而自然靠近彼此的样子。'
    ]},
    'object-4': {title:'窗边梳头的早晨',deck:'木梳穿过头发的声音，和奶奶反复讲过的故事一起，成为童年最安静的部分。',paragraphs:[
      '这把木梳一直放在窗边的小抽屉里。奶奶早晨会坐在有阳光的位置，一下一下把头发梳整齐。木齿经过头发时很轻，偶尔碰到打结的地方，她就停下来慢慢理开。',
      '我坐在旁边听她讲年轻时的事情。同一个故事听过很多遍，细节却总有一点不同：有时是河水更深，有时是回家的路更远。那时我并不知道，重复本身就是记忆保存自己的方式。',
      '梳子后来少了一根齿，奶奶仍舍不得换。现在握住它，掌心会自然找到她过去留下的弧度，仿佛那个早晨还没有结束。'
    ]},
    'object-5': {title:'父亲手里反复开合的打火机',deck:'它很少真正点燃，却用一次次清脆的开合声，标记着父亲思考和等待的时刻。',paragraphs:[
      '父亲并不常抽烟，但总把这只打火机带在身上。等人、想事情或看电视时，他会无意识地打开再合上，金属盖发出很短的声音。',
      '小时候我觉得那像一种小小的机关，总想拿来玩。他不许我点火，却会把没有燃料的打火机递过来，让我听里面齿轮转动的声音。',
      '后来他戒了烟，打火机被留在抽屉里。多年形成的划痕没有被擦掉，它们比任何说明都更像一个人的习惯。'
    ]},
    'object-6': {title:'被岁月磨亮的旧汤匙',deck:'一只不起眼的汤匙，在一日三餐里见证了孩子长大和家人的老去。',paragraphs:[
      '这只汤匙原来是一套餐具中的一把，后来其他几把陆续丢失，只剩它一直留在家里。边缘被使用得很圆，握柄上的花纹也几乎看不清。',
      '小时候生病，母亲会用它一口一口喂粥；长大后回家，我又用它替老人搅开杯底的药。物件没有改变，拿着它的人和被照顾的人却交换了位置。',
      '它没有值得炫耀的来历，只是在无数顿饭里被反复使用。正因为普通，才像家本身一样可靠。'
    ]},
    'object-7': {title:'发条停在客厅中央',deck:'铁皮机器人曾经可以走很远，直到我们第一次意识到所有运动都会慢慢停下。',paragraphs:[
      '机器人是生日时收到的礼物。把钥匙插进背后拧紧，它就会摇摇晃晃向前走，胸口的小灯跟着闪。我们总在客厅地板上给它让出一条路。',
      '有一次发条拧得太紧，它走到房间中央突然停住。大家围过去研究了很久，最后还是没能修好。它从玩具变成了摆在柜子上的纪念。',
      '多年后再看，那种笨拙的机械动作仍然比完美的电子动画更动人，因为我们记得曾经蹲在地上等它重新迈步。'
    ]},
    'object-8': {title:'夹在书页里的那个秋天',deck:'叶子失去了颜色，但一次并肩散步的下午，仍停留在翻开书页的瞬间。',paragraphs:[
      '那天没有特别的计划，只是沿着河边一直走。风把叶子吹到脚边，有人挑了一片形状完整的，说可以夹进书里。',
      '回家后我们把它放在一本很厚的书中，过了很久才再次想起。叶片已经变脆，鲜亮的橙色也褪成了棕黄。',
      '它保存不了秋天原来的颜色，却保存了当时愿意慢慢走路、慢慢说话的心情。'
    ]},
    'photo-0': {title:'客厅里难得完整的一张合照',deck:'快门落下以后狗先跑出了镜头，而一家人难得同时坐下的下午被留了下来。',paragraphs:[
      '那年春节人到得很齐，沙发不够坐，几个人搬来餐椅挤在旁边。拍照的人不断喊大家往中间靠，孩子却一直盯着门口的狗。',
      '快门落下的瞬间，狗已经准备跑开，所以照片角落只留下半截尾巴。后来每次翻到这里，大家都会重新讲一遍当时的混乱。',
      '合照真正保存的不是整齐，而是那么多人曾经愿意在同一间客厅里，为一张照片停下来。'
    ]},
    'photo-1': {title:'放学以后故意绕远的老街',deck:'回家的路本来很短，我们却总愿意从老街慢慢走过。',paragraphs:[
      '老街两边是低矮的铺面，下午放学时会闻到糕点和煤炉混在一起的味道。明明有更近的路，我们还是喜欢从这里绕回家。',
      '路上可以买一颗糖，也可以在修车摊前看很久。那时没有人催着抵达，绕远本身就是一天里难得属于自己的时间。',
      '街道后来拓宽，熟悉的店面逐渐消失。照片让人记得，城市不仅由地标组成，也由那些故意放慢脚步的路径组成。'
    ]},
    'photo-2': {title:'毕业那天没有说出口的告别',deck:'校服、操场和故作轻松的笑容，都留在离开学校前的最后一卷胶片里。',paragraphs:[
      '拍照时大家还在讨论暑假的安排，好像开学后仍会坐回原来的位置。有人在校服上写名字，有人跑去空教室拿忘记的东西。',
      '真正的告别没有明确发生。人群一点点散开，最后只剩操场上的影子和被风吹起的纸屑。',
      '后来才明白，很多阶段结束时没有仪式。照片之所以重要，是因为它替我们指出了那个当时没有意识到的终点。'
    ]},
    'photo-3': {title:'第一次看见海的那一天',deck:'风很大，声音听不清楚，但谁也不愿意先离开海边。',paragraphs:[
      '车开了很久，海是在一个转弯后突然出现的。大家同时安静了一下，然后开始争着指向窗外。',
      '到了岸边，风把头发和衣服吹得乱七八糟。我们说话要靠得很近，拍下的照片也几乎没有一张端正。',
      '回程时鞋里全是沙子。多年以后，最清楚的仍是站在辽阔水面前，那种第一次知道世界比想象更大的感觉。'
    ]},
    'photo-4': {title:'蜡烛熄灭以前的愿望',deck:'大家催着快点许愿，而真正值得珍惜的，其实是围在桌边等待的那些人。',paragraphs:[
      '蛋糕不大，奶油在回家的路上蹭坏了一角。家人还是认真插好蜡烛，关掉灯，唱了一遍并不整齐的生日歌。',
      '我闭着眼想了很久，旁边的人忍不住提醒蜡烛快烧完了。照片拍到的正是大家笑起来的瞬间。',
      '那个愿望后来有没有实现已经记不清了，但围在桌边的人和他们等待的目光，比愿望本身留得更久。'
    ]},
    'photo-5': {title:'它总在门口等我们回家',deck:'一只小狗不知道迟到意味着什么，只知道门外的脚步声值得一次次期待。',paragraphs:[
      '每天傍晚，它都会提前趴到门边。电梯响一次就抬一次头，听见熟悉的钥匙声才真正站起来。',
      '我们以为这种等待会一直持续，所以很少为它拍照。留下的几张里，它总是看向镜头外，像还在确认有没有人回来。',
      '后来门口安静下来，才发现被等待也是一种幸运。这张照片让那阵急促的脚步声重新回到记忆里。'
    ]},
    'photo-6': {title:'第一次独自坐很远的火车',deck:'窗外的景色不断后退，一个人出发的紧张也慢慢变成了期待。',paragraphs:[
      '绿皮火车开得不快，车厢里有人吃泡面、聊天，也有人靠着窗睡觉。我把车票反复确认，担心坐过站。',
      '天色变化以后，窗玻璃开始映出自己的脸。第一次独自去很远的地方，让人同时觉得自由和不安。',
      '抵达时已经是深夜。那张模糊的车窗照片，后来成了许多次出发的起点。'
    ]},
    'photo-7': {title:'搬家前，给旧房子留下最后一张照片',deck:'门框上的身高刻度、墙面的划痕和窗边的光，一起成为无法带走的家庭档案。',paragraphs:[
      '决定搬家以后，屋里的东西很快被装进纸箱。家具搬走，房间显得比记忆里更大，也更陌生。',
      '我们最后拍下了空房间。门框上还留着每年量身高的刻度，旁边写着日期，有几笔已经被新漆盖住。',
      '照片没有拍下某个特别事件，却记录了所有事件发生过的容器。关门以后，那些无法拆走的痕迹只能留在画面里。'
    ]},
    'photo-8': {title:'一个后来变得珍贵的普通下午',deck:'没有节日，也没有特别安排，只因为有人按下快门，普通时光才获得了返回的入口。',paragraphs:[
      '那天下午只是去公园走走。有人坐在长椅上晒太阳，有人在草地边慢慢走，谁也没有觉得需要纪念。',
      '照片拍得很随意，构图甚至有些偏。多年后再看，却能想起当时的温度、树影和说到一半的话。',
      '生活中真正占多数的正是这样的日子。它提醒我们，珍贵并不总在发生时就被认出来。'
    ]}
  };

  const root = document.createElement('div');
  root.id = 'experience-root';
  root.innerHTML = `
    <section id="capture-view" class="experience-view" aria-hidden="true">
      <header class="experience-header is-light"><button class="icon-button capture-back" aria-label="返回主页"><span class="material-symbols-rounded">arrow_back</span></button><img class="brand-image" src="assets/Gather.svg" alt="Gather"><span style="width:44px"></span></header>
      <div class="capture-shell">
        <div class="camera-stage"><div class="camera-grid"></div><div class="camera-guide object-mode"></div><div class="camera-hint">将物品放在轮廓中央，保持背景简洁</div><div class="capture-modes"><button class="capture-mode is-active" data-mode="object">收藏物品</button><button class="capture-mode" data-mode="photo">扫描照片</button></div></div>
        <div class="capture-controls"><span></span><button class="shutter" aria-label="拍摄"></button><label class="repair-toggle"><span>AI 修复</span><button class="switch" type="button" aria-label="切换 AI 修复"></button></label></div>
      </div>
      <div class="capture-result"><div><img class="capture-result-visual" alt="拍摄结果"><div class="repair-scan"></div></div><div class="result-copy"><h2></h2><p></p><div class="result-actions"><button class="secondary-button retake-button">重新拍摄</button><button class="primary-button capture-continue">继续</button></div></div></div>
    </section>
    <section id="interview-view" class="experience-view" aria-hidden="true">
      <header class="experience-header"><button class="icon-button interview-back" aria-label="返回"><span class="material-symbols-rounded">arrow_back</span></button><img class="brand-image" src="assets/Gather.svg" alt="Gather"><span style="width:44px"></span></header>
      <div class="interview-shell"><div class="ripple-field"><span></span><span></span><span></span><span></span></div><img class="subject-float" alt="采访对象">
        <div class="interview-panel">
          <div class="interview-setup"><div class="mode-switcher"><button data-mode="record" class="is-active">普通录音</button><button data-mode="ai">AI 访谈</button></div><div class="interview-copy"><div class="eyebrow">ORAL HISTORY</div><h1>把这段记忆说下来</h1><p>录下你和家人的讲述，结束后会整理为一篇可阅读的口述史。</p></div><button class="record-button start-interview" aria-label="开始"><span class="material-symbols-rounded">mic</span></button></div>
          <div class="interview-running"><div class="question-number"></div><div class="question-text"></div><div class="live-wave">${bars.map((h,i)=>`<i style="--h:${h}px;--i:${i}"></i>`).join('')}</div><div class="record-meta">00:00</div><div class="finish-row"><button class="primary-button next-answer">结束录音</button></div></div>
          <div class="interview-complete"><div class="complete-mark"><span class="material-symbols-rounded">check</span></div><div class="interview-copy"><div class="eyebrow">MEMORY SAVED</div><h1>这段记忆已经整理好了</h1><p>录音已保留，并生成了一篇口述史。你可以继续阅读，也可以回到主页。</p></div><div class="finish-row"><button class="secondary-button complete-home">回到主页</button><button class="primary-button complete-detail">查看口述史</button></div></div>
        </div>
      </div>
    </section>
    <section id="detail-view" class="experience-view" aria-hidden="true"><header class="experience-header"><button class="icon-button detail-back" aria-label="返回主页"><span class="material-symbols-rounded">arrow_back</span></button><img class="brand-image" src="assets/Gather.svg" alt="Gather"><span style="width:44px"></span></header><div class="experience-scroll"><article class="detail-page"></article></div></section>
    <div class="toast-message"></div>`;
  document.body.appendChild(root);

  const $ = selector => root.querySelector(selector);
  const views = [...root.querySelectorAll('.experience-view')];
  let currentView = 'home';
  let captureMode = 'object';
  let repairEnabled = false;
  let currentSubject = null;
  let interviewMode = 'record';
  let interviewTimer = 0;
  let interviewSeconds = 0;
  let questionIndex = 0;
  let toastTimer = 0;

  const subjectFromItem = item => {
    const key = `${item.type}-${item.sourceIndex}`;
    const meta = histories[key];
    return {key,type:item.type,sourceIndex:item.sourceIndex,title:item.memory[0].includes('·')?item.memory[0].split('·').slice(1).join('·').trim():item.memory[0],time:item.type==='photo'?item.memory[0].split('·')[0].trim():(objectTimes[item.sourceIndex]||'时间未记录'),summary:item.memory[1],src:item.previewSrc,order:item.order,item,history:meta};
  };
  const capturedSubject = mode => mode === 'object'
    ? {key:'object-4',type:'object',sourceIndex:4,title:'木梳',time:'20世纪70年代末',summary:'早晨坐在窗边，奶奶一边梳头，一边讲那些重复过很多次的故事。',src:'assets/objects/comb.webp',order:17,item:null,history:histories['object-4']}
    : {key:'photo-7',type:'photo',sourceIndex:7,title:'旧房子',time:'2018年',summary:'搬家前拍下最后一张照片，门框上还留着量身高的刻度。',src:'assets/photos/house.webp',order:18,item:null,history:histories['photo-7']};

  function showToast(message) {
    clearTimeout(toastTimer); const toast=$('.toast-message');toast.textContent=message;toast.classList.add('is-visible');
    toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),1800);
  }
  function showView(name) {
    currentView=name;
    views.forEach(view=>{const active=view.id===`${name}-view`;view.classList.toggle('is-active',active);view.setAttribute('aria-hidden',String(!active));});
    document.body.classList.toggle('experience-open',name!=='home');
  }
  function goHome() { stopInterviewTimer(); showView('home'); window.GatherHome?.closeFocus(); }

  function setCaptureMode(mode) {
    captureMode=mode;
    root.querySelectorAll('.capture-mode').forEach(button=>button.classList.toggle('is-active',button.dataset.mode===mode));
    $('.camera-guide').classList.toggle('object-mode',mode==='object');
    $('.camera-hint').textContent=mode==='object'?'将物品放在轮廓中央，保持背景简洁':'对准老照片边缘，系统会自动校正透视';
    $('.repair-toggle').classList.toggle('is-visible',mode==='photo');
  }
  function showCaptureResult() {
    currentSubject=capturedSubject(captureMode);
    const result=$('.capture-result'),image=$('.capture-result-visual');
    image.src=currentSubject.src;
    image.className=`capture-result-visual ${captureMode==='photo'&&!repairEnabled?'scan-before':''}`;
    result.classList.toggle('is-repairing',captureMode==='photo'&&repairEnabled);
    if(captureMode==='photo'&&repairEnabled)setTimeout(()=>{
      image.classList.add('scan-repaired');result.classList.remove('is-repairing');
      $('.result-copy p').textContent='AI 修复完成，褪色、划痕和清晰度已经优化。';
    },1100);
    $('.result-copy h2').textContent=captureMode==='object'?'已抠除物品主体':'老照片扫描完成';
    $('.result-copy p').textContent=captureMode==='object'?'背景已经移除，可以继续记录它的故事。':repairEnabled?'正在修复褪色、划痕与清晰度。':'已完成边缘识别和透视校正。';
    result.classList.add('is-visible');
  }
  function openCapture() {
    window.GatherHome?.closeFocus(); repairEnabled=false;$('.switch').classList.remove('is-on');$('.capture-result').classList.remove('is-visible','is-repairing');setCaptureMode('object');showView('capture');
  }

  function configureInterview(subject) {
    currentSubject=subject;
    $('.subject-float').src=subject.src;
    $('.interview-setup').classList.remove('is-hidden');
    $('.interview-running').classList.remove('is-visible');
    $('.interview-complete').classList.remove('is-visible');
    setInterviewMode('record');
  }
  function setInterviewMode(mode) {
    interviewMode=mode;
    root.querySelectorAll('.mode-switcher button').forEach(button=>button.classList.toggle('is-active',button.dataset.mode===mode));
    $('.ripple-field').classList.toggle('is-visible',mode==='ai');
    $('.interview-copy h1').textContent=mode==='ai'?'让问题带你回到那一刻':'把这段记忆说下来';
    $('.interview-copy p').textContent=mode==='ai'?'AI 会围绕这件物品逐步提问，不打断你的讲述。':'录下你和家人的讲述，结束后会整理为一篇可阅读的口述史。';
  }
  function openInterview(itemOrSubject) {
    const subject=itemOrSubject?.el?subjectFromItem(itemOrSubject):itemOrSubject;
    if(!subject)return;
    configureInterview(subject);showView('interview');
  }
  function startInterview() {
    interviewSeconds=0;questionIndex=0;
    $('.interview-setup').classList.add('is-hidden');$('.interview-running').classList.add('is-visible');
    $('.question-number').textContent=interviewMode==='ai'?'QUESTION 01':'RECORDING';
    $('.question-text').textContent=interviewMode==='ai'?questions[0]:'正在记录你们的讲述';
    $('.next-answer').textContent=interviewMode==='ai'?'说完了':'结束录音';
    $('.record-meta').textContent='00:00';
    interviewTimer=setInterval(()=>{interviewSeconds++;$('.record-meta').textContent=`${String(Math.floor(interviewSeconds/60)).padStart(2,'0')}:${String(interviewSeconds%60).padStart(2,'0')}`;},1000);
  }
  function stopInterviewTimer(){clearInterval(interviewTimer);interviewTimer=0;}
  function nextInterviewStep() {
    if(interviewMode==='ai'&&questionIndex<questions.length-1){
      questionIndex++;$('.question-number').textContent=`QUESTION ${String(questionIndex+1).padStart(2,'0')}`;$('.question-text').textContent='正在整理你的回答…';
      setTimeout(()=>{if(currentView==='interview')$('.question-text').textContent=questions[questionIndex];},620);return;
    }
    finishInterview();
  }
  function ensureSubjectOnHome() {
    if(!currentSubject)return;
    if(!currentSubject.item){
      currentSubject.item=window.GatherHome?.addCaptured(currentSubject.type,currentSubject.sourceIndex)||null;
      if(currentSubject.item){currentSubject.order=currentSubject.item.order;showToast(`${currentSubject.title}已加入主页`);}
    }
    const updated=`${currentSubject.summary.replace(/[。！？]$/,'')}。这次讲述也已经整理进它的口述史。`;
    currentSubject.summary=updated;
    window.GatherHome?.updateMemory(currentSubject.item,updated);
  }
  function finishInterview() {
    stopInterviewTimer();ensureSubjectOnHome();
    $('.interview-running').classList.remove('is-visible');$('.interview-complete').classList.add('is-visible');
    $('.ripple-field').classList.toggle('is-visible',interviewMode==='ai');
  }

  function audioMarkup(duration) {
    return `<button class="audio-player detail-audio" type="button"><span class="audio-toggle"><span class="material-symbols-rounded">play_arrow</span></span><span class="waveform">${bars.slice(0,18).map((h,i)=>`<i style="--h:${h}px;--i:${i}"></i>`).join('')}</span><span class="audio-time">0:00 / ${Math.floor(duration/60)}:${String(duration%60).padStart(2,'0')}</span></button>`;
  }
  function bindSilentAudio(button,duration) {
    let playing=false,elapsed=0,timer=0;
    button.addEventListener('click',()=>{
      playing=!playing;button.classList.toggle('is-playing',playing);button.querySelector('.audio-toggle .material-symbols-rounded').textContent=playing?'pause':'play_arrow';
      clearInterval(timer);
      if(playing)timer=setInterval(()=>{elapsed++;if(elapsed>=duration){elapsed=0;playing=false;clearInterval(timer);button.classList.remove('is-playing');button.querySelector('.audio-toggle .material-symbols-rounded').textContent='play_arrow';}button.querySelector('.audio-time').textContent=`${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,'0')} / ${Math.floor(duration/60)}:${String(duration%60).padStart(2,'0')}`;},1000);
    });
  }
  function openDetail(itemOrSubject) {
    const subject=itemOrSubject?.el?subjectFromItem(itemOrSubject):itemOrSubject;
    if(!subject)return;
    currentSubject=subject;
    const history=subject.history||histories[subject.key];
    const duration=88+(subject.sourceIndex*17)%92;
    $('.detail-page').innerHTML=`<div class="detail-hero"><img class="detail-subject" src="${subject.src}" alt="${subject.title}"><span class="detail-label">${subject.title}</span><span class="detail-time">${subject.time}</span></div><div class="detail-number">${String(subject.order||1).padStart(2,'0')}</div><h1 class="detail-title">${history.title}</h1><p class="detail-deck">${history.deck}</p>${audioMarkup(duration)}<div class="detail-body">${history.paragraphs.map((p,i)=>`${i===1?'<h2>记忆里的细节</h2>':''}<p>${p}</p>`).join('')}</div>`;
    bindSilentAudio($('.detail-audio'),duration);showView('detail');$('.experience-scroll').scrollTop=0;
  }

  document.addEventListener('click',event=>{
    if(event.target.closest('#add-memory-button'))openCapture();
  });
  $('.capture-back').addEventListener('click',goHome);
  root.querySelectorAll('.capture-mode').forEach(button=>button.addEventListener('click',()=>setCaptureMode(button.dataset.mode)));
  $('.switch').addEventListener('click',()=>{repairEnabled=!repairEnabled;$('.switch').classList.toggle('is-on',repairEnabled);});
  $('.shutter').addEventListener('click',showCaptureResult);
  $('.retake-button').addEventListener('click',()=>$('.capture-result').classList.remove('is-visible','is-repairing'));
  $('.capture-continue').addEventListener('click',()=>openInterview(currentSubject));
  $('.interview-back').addEventListener('click',()=>{stopInterviewTimer();showView(currentSubject?.item?'home':'capture');});
  root.querySelectorAll('.mode-switcher button').forEach(button=>button.addEventListener('click',()=>setInterviewMode(button.dataset.mode)));
  $('.start-interview').addEventListener('click',startInterview);
  $('.next-answer').addEventListener('click',nextInterviewStep);
  $('.complete-home').addEventListener('click',goHome);
  $('.complete-detail').addEventListener('click',()=>openDetail(currentSubject));
  $('.detail-back').addEventListener('click',goHome);

  window.GatherExperience={openCapture,openInterview,openDetail};
})();
