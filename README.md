# Read Me

**React Native Text Slider**


# Installation

    npm install text-slider --save
or

    yarn add text-slider

## Simple Usage

    import React from 'react'
    import TextSlider from 'text-slider'
    const slideText = ["Welcome to React Native Text Slider",
    "It is very easy to use",
    "You can simply install and use it now",
    "If you have any issues open up an issue in issues tab"
    ]
    export default MyComponent extends React.Component{
    render(){
	    return(
		    <TextSlider 
		    frequency=5000
		    slideText={slideText}
		    />
	    )
    }
    }

## Advanced Usage

    import React from 'react'
    import TextSlider from 'text-slider'
    const slideText = ["Welcome to React Native Text Slider",
    "It is very easy to use",
    "You can simply install and use it now",
    "If you have any issues open up an issue in issues tab"
    ]
    const wrapperStyle = {
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
    }
    const currentText = {
		textAlign: 'center',
		alignSelf: 'center',
		color: '#ffffff'
	}

	const activeDot = {
	width: 10,
	height: 10,
	borderRadius: 5,
	backgroundColor:'#ffffff',
	marginRight: 10,
	}

	const inactiveDot = {
	width: 10,
	height: 10,
	borderRadius: 5,
	backgroundColor:'grey',
	marginRight: 10
	}
    export default MyComponent extends React.Component{
    render(){
	    return(
		    <TextSlider 
		    frequency=5000
		    slideText={slideText}
		    wrapperStyle={wrapperStyle}
		    currentTextStyle={currentText}
		    activeDotStyle={activeDot}
		    inactiveDotStyle={inactiveDot}
		    currentIndex=0
		    />
	    )
    }
    }



## Props



