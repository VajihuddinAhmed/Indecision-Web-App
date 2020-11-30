import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options : []
            }
        })
    }
    handleClearModal = () => {
        this.setState(() => {
            return {
                selectedOption : undefined
            }
        })
    }
    handleDeleteItem = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options : prevState.options.filter((item) => {
                    return optionToRemove !== item
                })
            }
        })
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => {
          return {
            selectedOption : option
        }
        })
    }
    handleAdd = (option) => {
        if(!option) {
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This value already exists'
        } else {
            this.setState((prevState) => {
                return {
                    options : prevState.options.concat(option)
                }
            })
        }
    }

    componentDidMount() {
        try {
          const json = localStorage.getItem('options')
          const options = JSON.parse(json);
    
          if (options) {
            this.setState(() => {
                return {
                    options : options
                }
            })
          }
        } catch (e) {
          // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options)
          localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header sub={subtitle}  />
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                        items={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteItem={this.handleDeleteItem}
                        />
                        <AddOption handleAdd={this.handleAdd} />
                    </div>
                </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearModal={this.handleClearModal} 
                />
            </div>
        )
    }
}
