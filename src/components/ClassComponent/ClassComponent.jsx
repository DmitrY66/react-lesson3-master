import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  state = {
    result: 'Результат',
    userNumber: '',
    randomNumber:
      Math.floor(Math.random() * this.props.max - this.props.min) +
      this.props.min,
    count: 0,
    again: style.hidden,
    btnDisabled: false,
  };


  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(state => {
      // console.log(state.userNumber);
      // console.log(state.randomNumber);

      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
          userNumber: '',
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
          userNumber: '',
        };
      }

      return {
        result: `Вы угадали, загаданное число ${state.userNumber}
        попыток ${state.count}`,
        userNumber: '',
        again: style.btnAgain,
        btnDisabled: true,
      };
    });
  };

  handleChange = e => {
    this.setState({
      userNumber: e.target.value,
    });
  };

  handleAgain = e => {
    this.setState({
      result: 'Результат',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      again: style.hidden,
      count: 0,
      btnDisabled: false,
    });

    // const check = () =>
    //   console.log('randomNumber: ', this.state.randomNumber);
    // setTimeout(check, 0);
  };

  render() {
    return (
      <div className={style.gameContainer}>

        <div className={style.game}>

          <p className={style.result}>{this.state.result}</p>

          <form
            className={style.form}
            onSubmit={this.handleSubmit}>

            <label
              className={style.label}
              htmlFor='user_number'>
              Угадай число
            </label>

            <input
              className={style.input}
              type='number' id='user_number'
              onChange={this.handleChange}
              value={this.state.userNumber} />

            <button
              disabled={this.state.btnDisabled}
              className={style.btn}
            >Угадать</button>

          </form>

        </div>

        <button
          className={this.state.again}
          onClick={this.handleAgain}
        >Сыграть ещё</button>

      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
