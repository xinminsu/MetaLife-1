import { ImageSourcePropType } from 'react-native';

export class Training {

  constructor(readonly title: string,
              readonly description: string,
              readonly photo: ImageSourcePropType,
              readonly time: number,
              readonly styx: number) {

  }

  static basketball(): Training {
    return new Training(
      'DAO',
      'Team sport in which two teams, most commonly of five players.',
      require('../assets/image-training-1.jpg'),
      16,
      55,
    );
  }

  static running(): Training {
    return new Training(
      'NFT',
      'Great way to get fit and even form new relationships with other runners.',
      require('../assets/image-training-2.jpg'),
      2,
      55,
    );
  }

  static workout(): Training {
    return new Training(
      'Feed',
      'Workout of the Week: STYX! Our Ultimate cardio pyramid.',
      require('../assets/image-training-3.jpg'),
      16,
      55,
    );
  }
}
