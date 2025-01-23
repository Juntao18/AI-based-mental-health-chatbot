document.addEventListener("DOMContentLoaded", function () {
  var chatWindow = document.getElementById("chat-window");
  var userInput = document.getElementById("user-input");
  var sendBtn = document.getElementById("send-btn");

  // 聊天机器人预设的回复 / Chatbot's predefined responses
    //Key words responses  简单的回应逻辑
    const responses = {
      anxiety: "It sounds like you're feeling anxious. Would you like some breathing exercises?",
      stress: "Stress can be tough. Remember to take breaks and practice self-care.",
      hello: "Hello! How can I support you today?",
      default: "I'm here to help. Please tell me how you're feeling.",
      sadness: "I hear that you're feeling sad.  Would you like to talk about it or try some gentle activities?",
      loneliness: "Feeling lonely can be really hard.  I'm here to listen if you'd like to share, or we can explore some ways to connect with others.",
      anger: "It sounds like you're feeling angry.  Would you like to explore some ways to manage your anger?",
      frustration: "Frustration can be challenging. Maybe we can try breaking down the issue into smaller steps or consider other perspectives?",
      overwhelmed: "It sounds like you're feeling overwhelmed. Let's see if we can prioritize and focus on one thing at a time.",
      tired: "It seems you're feeling tired.  Make sure to get enough rest and prioritize self-care. Is there anything I can do to help you relax?",
      irritability: "I understand you're feeling irritable.  Is there something specific that is bothering you, or would you like some quiet time?",
      hopeful: "That's wonderful that you're feeling hopeful! Keep that positive momentum going. How can I support you further?",
      calm: "It's great that you're feeling calm! Keep doing what's working for you.",
      grateful: "It's lovely to hear you're feeling grateful.  It's a wonderful feeling to embrace.  Is there anything else I can assist you with?",
      fear: "It sounds like you're experiencing fear. Would you like to talk about what you are afraid of or try some relaxation techniques?",
      guilt: "Feeling guilt can be tough.  Let's explore what's causing this feeling and find healthy ways to move forward.",
      shame: "Experiencing shame is a difficult emotion. Please know that I'm here for you, and we can work through this together.",
      confusion: "It sounds like you're feeling confused. Would you like to talk through what's on your mind, or try to organize your thoughts?",
      motivation: "It's great that you're focused on motivation. How can we work on setting achievable goals together?",
      focus: "It's great that you're working on focus. How can we help reduce distractions and stay present?",
      selfdoubt: "I hear you're having self-doubt. It's common to question yourself sometimes. Let's talk through your doubts and find your inner strengths.",
      disappointment: "Feeling disappointment can be tough. Let's take some time to acknowledge the feeling and process what happened. ",
       acceptance: "It sounds like you're feeling acceptance which is a great place to be.  Remember to be kind to yourself.",
      peace: "It's wonderful that you're feeling peace.  How can I assist you in maintaining this?",
      panic: "It sounds like you're experiencing panic.  Let's try some calming techniques together to help you feel safer.",
      helpless: "I understand you're feeling helpless. Remember you are not alone, and there are things we can explore together to find solutions.",
       vulnerable: "It sounds like you're feeling vulnerable, that can be a really hard place to be. Is there anything you'd like to talk about or need help with?",
       joyful: "It sounds like you're feeling joyful! It's great to embrace positive feelings, how can I support you today?",
      excited: "That's wonderful that you're feeling excited, how can we harness this energy today?",
      Grief: "I understand you're experiencing grief. It's important to allow yourself to feel and process these emotions. Would you like to talk about your loss or explore some resources?",
      loss: "Experiencing a loss can be incredibly painful. I'm here to support you through this difficult time. How can I help you feel a bit more comfortable right now?",
      trauma: "It sounds like you may be dealing with the impact of trauma. Please know that you're not alone and that there are paths towards healing. Would you like to explore support options together?",
      hopelessness: "Feeling hopeless can be incredibly difficult. Please know that there is support available and things can improve. Can we talk about what might be contributing to this feeling?",
      emptiness: "It sounds like you're experiencing a sense of emptiness. Sometimes exploring your values and reconnecting with what's important to you can help. Would you like to explore that?",
      worthlessness: "Feeling worthless is a very painful experience. Please know that your feelings are valid and you deserve to feel better. Let's explore your strengths and ways to boost self-esteem together.",
      numbness: "I understand you're feeling numb. It can be a protective response to overwhelming emotions. Would you like to try gentle grounding techniques or explore what might be underlying it?",
      restlessness: "It sounds like you're feeling restless. Maybe a short walk, some stretching, or listening to relaxing music might help you feel more grounded. Would you like to try any of those?",
       agitation: "It sounds like you're feeling agitated. Would you like to try some deep breathing exercises or find a quiet place to calm your mind?",
      paranoia: "It sounds like you are experiencing paranoia, which can be really scary. It might help to take a few deep breaths and focus on what's happening in the present moment. Would you like to try some grounding techniques?",
      hypervigilance: "It sounds like you are experiencing hypervigilance, which can be exhausting. Let's talk about your safety, and ways to reduce those feelings, would you like to explore that?",
      social_anxiety: "It sounds like social situations are causing you anxiety. Let's explore ways to make those situations feel less challenging. How can we help make them easier?",
      perfectionism: "It sounds like you're striving for perfection, which can be incredibly stressful. Let's work on accepting good enough, and building self-compassion.",
      comparison: "Comparing yourself to others can be harmful. Let's focus on your personal strengths and journey. How can we change the focus?",
      procrastination: "It sounds like you are procrastinating, which can feel really difficult. Lets take a look at what might be causing this and make a plan to break it down",
      decision_fatigue: "Making decisions can feel overwhelming sometimes. Let's break down the decision making into smaller tasks, and take the pressure off",
      impatience: "I hear you are feeling impatient. What is it that you are waiting for? Lets explore if there are things we can do in the meantime to help pass the time.",
      energy: "It sounds like you have some energy. Do you want to find a way to channel this into a hobby or other positive activity today?",
      lethargic: "It sounds like you're feeling lethargic, maybe a gentle stretch or movement would help? It's ok to rest though too.",
      mind_racing: "It sounds like your mind is racing. Let's find some ways to help you calm your thoughts. Shall we try some grounding or a relaxing activity?",
      brain_fog: "It sounds like you're experiencing brain fog. Let's see if we can find ways to help you focus and feel more clear. Perhaps we can talk through things?",
      overthinking: "It sounds like you are overthinking things. I can see how difficult that must be. Is there anything we can do to help slow your thoughts?",
      underwhelmed: "It sounds like you might be feeling underwhelmed. Is there something specific that isn't meeting your needs?",
      bored: "It sounds like you might be bored. Maybe we can think of an activity you enjoy, or do you just need some time to relax?",
      envy: "It sounds like you might be feeling envy. It's really hard when you are wanting what others have. How can I help you with that?",
      jealousy: "It sounds like you might be feeling jealousy. Would you like to talk about this? It can be a hard emotion to experience.",
       unmotivated: "It sounds like you are feeling unmotivated. Let's explore some ways to boost your mood, or make a plan to move forward.",
      self_sabotage: "It sounds like you might be self-sabotaging. Let's explore this, and find some positive alternatives.",
      vibrancy: "It's great to hear you are feeling vibrancy! How can we continue this positive path?",
      inspired: "It sounds like you're feeling inspired! How can we harness that feeling? Is there anything I can help you with?",
      empowered: "That's wonderful that you're feeling empowered! Keep doing what's working for you. How can we maintain this?",
      feeling_down: "Hey, it sounds like you're feeling a bit down. Has anything been bothering you lately? Want to talk about it?",
      burned_out: "It sounds like you're feeling burned out. Have you been pushing yourself too hard lately? Remember to take a break and rest.",
      cant_focus: "Hmm, it sounds like you're having trouble focusing. Is there something that's distracting you? Maybe try relaxing for a bit?",
      just_blah: "It sounds like you're just feeling 'blah,' like you can't get going. Sometimes that's normal. Is there anything you'd like to do to feel better?",
      on_edge: "It sounds like you're feeling a little on edge. Is there something making you feel tense? Take a deep breath, and let's take things slow.",
      easily_annoyed: "It sounds like you've been easily annoyed lately. Is something around you bothering you? Or maybe you just need some space?",
      worried_sick: "It sounds like you're worried sick. Is there something making you feel really anxious? Maybe talking about it would help find a solution?",
      heartbroken: "Oh, it sounds like you're heartbroken. Heartbreak and other sad things can be so hard. Don't carry it alone, I'm here for you.",
      stressed_out: "It sounds like you're super stressed out! Is there anything that's making you feel overwhelmed? Remember to take care of yourself.",
      lost_myself: "It sounds like you feel like you've lost yourself. Sometimes that happens, like you've lost your direction. We can explore it together.",
       overthinking_stuff: "It sounds like you're overthinking things. Sometimes focusing too much on details can make you feel more tired. Relax a little, don't overthink it.",
      no_energy: "It sounds like you're feeling low on energy, like you can't get going. Have you had enough rest lately? A good night's sleep might help a lot.",
      feeling_stuck: "It sounds like you feel stuck, as if life isn't moving forward. Let's try to find a way out of it, okay?",
      everything_is_too_much: "It sounds like everything is too much, and you are feeling overwhelmed. How about we break things up, and tackle them one by one?",
      feeling_jaded: "It sounds like you might be feeling a bit jaded. It's hard when you feel disenchanted with things. Is there anything that might help?",
        feeling_fragile: "It sounds like you're feeling fragile. It's okay to not feel strong all the time, is there anything I can help with today?",
      running_on_empty: "It sounds like you're running on empty. It's important to take breaks when you're feeling like that. Maybe I can help you with some strategies?",
      cant_shake_it_off: "It sounds like you can't shake it off and are carrying something heavy. It's okay to have a hard time, would you like to talk it over?",
      head_in_a_fog: "It sounds like your head is in a fog. It can be hard to think clearly like this. Maybe a little break and some hydration can help?",
      my_mind_is_blank: "It sounds like your mind is blank. That can be really frustrating. Maybe talking things over will help?",
      like_a_pressure_cooker: "It sounds like you're feeling like a pressure cooker. You have a lot going on and things need a release. Is there anything you would like to do?",
       like_a_rollercoaster: "It sounds like you're feeling like you're on a rollercoaster. It's hard when things are going up and down. Do you want to take a little break?",
      in_a_funk: "It sounds like you're feeling in a funk. That's really hard to go through. Let's explore how to bring you out of it?",
      wiped_out: "It sounds like you're feeling wiped out. That feeling of being completely exhausted. Let's see what we can do to help?",
      need_a_break: "It sounds like you need a break. It's really important to take time for yourself. Let's make some space.",
       need_a_hug: "It sounds like you need a hug. I wish I could give you one right now. Let's talk through this?",
      need_a_laugh: "It sounds like you need a laugh. That's always a good idea! Maybe we can watch a funny video or share a joke?",
      need_some_comfort: "It sounds like you need some comfort. It's really hard when things feel overwhelming. I'm here for you.",
     need_some_peace: "It sounds like you need some peace. Let's explore what that looks like to you, and try and create it.",
     feeling_grateful: "It's great to hear you are feeling grateful! Let's celebrate that and find more to be grateful for!",
     hi: "Hi there! It's good to connect with you. How can I help you today?",
     hello: "Hello! How are you doing? Is there anything you'd like to talk about?",
     hey: "Hey! What's up? I'm here if you need anything.",
     good_morning: "Good morning! How are you feeling today?",
     good_afternoon: "Good afternoon! Is there anything on your mind?",
     good_evening: "Good evening! How can I support you as your day winds down?",
     sad: "I hear that you're feeling sad. It's okay to feel that way. Would you like to talk about it?",
     happy: "That's wonderful to hear that you're feeling happy! What's making you feel so good?",
     angry: "It sounds like you're feeling angry. It's okay to feel angry, but it's important to handle it in a healthy way. Would you like to talk about what's making you upset?",
     stressed: "It sounds like you're feeling stressed. Stress can be tough. What's making you feel this way?",
     anxious: "It sounds like you're feeling anxious. Would you like to try some breathing exercises or just talk it through?",
     tired: "It sounds like you're feeling tired. It's important to rest. Have you been getting enough sleep?",
     okay: "Okay, thanks for letting me know. Is there anything I can help you with?",
     not_okay: "I'm sorry to hear that you're not okay. Is there anything you want to share?",
     fine: "Okay, thanks for letting me know. Is there anything I can do for you?",
     not_good: "I'm sorry to hear that you're not feeling good. Would you like to talk about what's going on?",
     thanks: "You're welcome! I'm glad I could be here for you. Let me know if you need anything else.",
     thank_you: "You're very welcome! I'm here to help anytime.",
      grateful: "It's great to hear you're feeling grateful! It's a wonderful feeling to embrace. Is there anything else I can assist you with?",
     lonely: "I hear you're feeling lonely. That can be a really difficult feeling. Would you like to explore some ways to connect with others, or just talk about it?",
     bored: "Oh, it sounds like you're feeling bored. Maybe we can think of an activity you enjoy, or do you just need some time to relax?",
     excited: "That's great you're feeling excited! What's got you so pumped?",
     calm: "That's wonderful that you're feeling calm. Is there anything we can do to help keep that feeling?",
     worried: "It sounds like you're feeling worried. What's on your mind?",
     confused: "It sounds like you're feeling confused. Is there anything I can help clarify?"
    };

    // 发送消息函数
  function sendMessage() {
    // 获取用户输入的消息
    var userMessage = userInput.value.trim();

    // 如果消息为空，直接返回
    if (userMessage === "") {
      return;
    }

    // 显示用户的消息到聊天窗口Display user's message in the chat window
    appendMessage("user", userMessage, "right", "user-avatar.png");

    // 根据关键词匹配生成机器人回复 / Generate bot response based on keyword matching
    var keywords = Object.keys(responses);
    var matchedKeyword = null;

    for (var i = 0; i < keywords.length; i++) {
      if (userMessage.toLowerCase().includes(keywords[i])) {
        matchedKeyword = keywords[i];
        break;
      }
    }

    var botResponse = matchedKeyword ? responses[matchedKeyword] : responses["default"];

    // 模拟延迟后显示机器人回复 / Simulate a delay before showing the bot's response
    setTimeout(function () {
      appendMessage("bot", botResponse, "left", "rob-avatar.png");
    }, 500);

    // 清空输入框 / Clear the input box
    userInput.value = "";
  }

  // 显示消息到聊天窗口 / Function to display a message in the chat window
  function appendMessage(sender, message, position, avatar) {
    // 创建消息容器 / Create a message container
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(position);

    // 添加头像avatar
    var avatarElement = document.createElement("img");
    avatarElement.src = avatar; // 头像path
    avatarElement.alt = sender === "user" ? "User Avatar" : "Bot Avatar";
    avatarElement.classList.add("avatar");

    // 添加消息文本 / Add message text
    var contentElement = document.createElement("div");
    contentElement.classList.add("message-content");
    contentElement.textContent = message;

    // 根据发送者调整布局 / Adjust layout based on the sender
    if (position === "right") {
      messageElement.appendChild(contentElement);
      messageElement.appendChild(avatarElement);
    } else {
      messageElement.appendChild(avatarElement);
      messageElement.appendChild(contentElement);
    }

    // 将消息添加到聊天窗口 / Append the message to the chat window
    chatWindow.appendChild(messageElement);

    // 滚动到底部 / Scroll to the bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // 添加事件监听器 / Add event listeners
  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});