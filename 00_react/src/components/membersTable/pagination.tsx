import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    root: {
        flexShrink: 0,
    },
};

interface Props extends WithStyles<typeof styles> {
    page: number,
    onPageChange: (number) => void,
}

const PaginationInner = (props: Props) => {
    const {classes, onPageChange} = props;
    let {page} = props;

    const handleBackButtonClick = () => onPageChange(--page);
    const handleNextButtonClick = () => onPageChange(++page);


    return (
        <div className={classes.root}>

            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
                <KeyboardArrowLeft/>
            </IconButton>
            {page}
            <IconButton
                onClick={handleNextButtonClick}
                // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page">
                <KeyboardArrowRight/>
            </IconButton>

        </div>
    );
}

export const Pagination = withStyles(styles)(PaginationInner);
