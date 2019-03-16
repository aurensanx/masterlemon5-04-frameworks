import * as React from 'react';
import {withStyles, WithStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {MemberEntity} from '../../model/member';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

interface Props extends WithStyles<typeof styles> {
    member: MemberEntity,
}

export const MemberRowInner = (props: Props) => {
    const {classes} = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.member.avatar_url}
                    title={props.member.login}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.member.login}
                    </Typography>
                    <Typography component="p">
                        {props.member.id}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export const MemberRow = withStyles(styles)(MemberRowInner);
