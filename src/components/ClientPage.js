import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Button, Form ,Header, Icon, Grid, Image, Card, Input, Statistic , Segment} from "semantic-ui-react";
import * as CampaignActions from '../actions/CampaignActions';

@connect(state => ({
  campaign: state.campaign,
}), dispatch => ({
  handler(data) {
    dispatch(CampaignActions.createCampaign(data));
  },
}))

export default class ClientPage extends Component {

  render() {
    let { campaign } = this.props;
    let { Label, Value } = Statistic;
    let who;
    let money;
    if(campaign.who) {
      who = <Container>
        <Header as='h2' attached='top'>
          Who am I?
        </Header>
        <Segment attached>
          {campaign.who}
        </Segment>
      </Container>
    }
    if(campaign.money) {
      money = <Container>
        <Header as='h2' attached='top'>
          What am I going to spend it on?
        </Header>
        <Segment attached>
          {campaign.money}
        </Segment>
      </Container>
    }
    return (
      <Container className="campaign-form">
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={16}>
              <Image src={campaign.header} height='1px' fluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center" width={3}>
              <Image src={campaign.profile} shape="circular"/>
              <Statistic>
                <Value value='204' />
                <Label label='Clicks' />
              </Statistic>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container>
                <Image src={campaign.storyImg} />
                <Header as='h2' border attached='top'>
                  {campaign.title}
                </Header>
                <Segment attached>
                  {campaign.campaignDescription}
                </Segment>
              </Container>
              {who}
              {money}
            </Grid.Column>
            <Grid.Column width={5}>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='http://www.turnerduckworth.com/media/filer_public/86/18/86187bcc-752a-46f4-94d8-0ce54b98cd46/td-amazon-smile-logo-01-large.jpg' />
                  <Card.Header>
                    Amazon Online Store
                  </Card.Header>
                  <Card.Meta>
                    Affiliate Link
                  </Card.Meta>
                  <Card.Description>
                    <Input
                      action={{ color: 'teal', labelPosition: 'right', icon: 'copy' }}
                      defaultValue={campaign.amazonURL}
                    />
                  </Card.Description>
                </Card.Content>
                <Container>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='teal'>Direct Link</Button>
                    </div>
                  </Card.Content>
                </Container>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}