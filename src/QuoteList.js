import React from "react";
import Quote from "./Quote";
import PropTypes from "prop-types";

const QuoteList = props => {
  return (
    <div>{props.memos.map(memo => <Quote key={memo.id} quote={memo} />)}</div>
  );
};

QuoteList.propType = {
  memos: PropTypes.arrayOf(PropTypes.object)
};

export default QuoteList;
