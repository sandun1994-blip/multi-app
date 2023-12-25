import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Markdown from 'react-native-markdown-display';



const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;
type Props = {}

const EditorScreen = (props: Props) => {
  return (
    <View style={styles.page}>
       <Markdown style={markdownStyles}>
            {template}
          </Markdown>
    </View>
  )
  
}

const markdownStyles=StyleSheet.create(
    {
        heading1:{
            color:'red',
            fontFamily:'InterBold'
        },
        heading2:{
            fontFamily:'InterBold',color:'#404040'
        }
      
})

export default EditorScreen


const styles=StyleSheet.create({
    page:{
        backgroundColor:'white',
        padding:10
    }
})