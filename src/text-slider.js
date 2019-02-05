import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types';

export default class TextSlider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            frequency: this.props.frequency,
            currentIndex: this.props.currentIndex,
            slideText: this.props.slideText,
            currentText: this.props.slideText[0],
            intervalID: null
        }
    }
    componentDidMount(){
        this.setSlider();
    }
    componentWillUnmount(){
        const {intervalID} = this.state;
        clearInterval(intervalID);
    }
    setSlider(){
        const {frequency, slideText, currentIndex} = this.state
        const intervalid = setInterval(()=>{
          this.setState({currentIndex: currentIndex + 1, currentText: slideText[currentIndex]})
            if (currentIndex >= slideText.length){
              this.setState({currentIndex: 0})
            }
        }, frequency)
        this.setState({intervalID: intervalid})
      }
    render(){
        const {currentText, slideText, currentIndex} = this.state
        const {wrapperStyle, currentTextStyle, activeDotStyle, inactiveDotStyle} = this.props
        return(
        <View style={{...styles.wrapper, ...wrapperStyle}}>
        <Text style={{...styles.currentText, ...currentTextStyle}}>{currentText}</Text>
        <View style={{flexDirection:'row', marginTop: 8, justifyContent:'space-evenly', alignContent:'space-between'}}>
        {slideText.map((item, index)=>{
          if(currentIndex == index){
            return <View style={{...styles.activeDot, ...activeDotStyle}}/>
            
          }
          else{
            return <View style={{...styles.inactiveDot, ...inactiveDotStyle}}/>
          }
        })}
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1, 
        width:'100%', 
        padding: 6, 
        backgroundColor: '#085078', 
        alignSelf: 'center',  
        marginTop:0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        elevation: 2
    },
    currentText:{
        textAlign: 'center', 
        alignSelf:'center', 
        fontFamily:'AdventPro-Bold', 
        color:'#ffffff'
    },
    activeDot:{
        width: 10, 
        height: 10, 
        borderRadius: 5, 
        backgroundColor:'#ffffff', 
        marginRight: 10,
    },
    inactiveDot:{
        width: 10, 
        height: 10, 
        borderRadius: 5, 
        backgroundColor:'grey', 
        marginRight: 10
    }
})

TextSlider.propTypes = {
    slideText: PropTypes.array.isRequired,
    frequency: PropTypes.number.isRequired,
    wrapperStyle: PropTypes.object,
    currentTextStyle: PropTypes.object,
    activeDotStyle: PropTypes.object,
    inactiveDotStyle: PropTypes.object,
    currentIndex: PropTypes.number.isRequired
}

TextSlider.defaultProps = {
    frequency: 5000,
    currentIndex: 0
}