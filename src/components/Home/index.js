import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainDiv,
  CardDiv,
  LeftDiv,
  LeftH1,
  LeftImg,
  RightDiv,
  ToolUl,
  ToolLi,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <MainDiv>
        <CardDiv>
          <LeftDiv>
            <LeftH1>Text Editor </LeftH1>
            <LeftImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftDiv>
          <RightDiv>
            <ToolUl>
              <ToolLi>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  color={boldColor}
                >
                  <VscBold size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  color={italicColor}
                >
                  <GoItalic size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  color={underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolLi>
            </ToolUl>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightDiv>
        </CardDiv>
      </MainDiv>
    )
  }
}
export default Home
