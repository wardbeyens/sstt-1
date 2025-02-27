import wktLiteralPointToArray from './wktLiteralPointToArray';
import { FeatureCollection, featureCollection, Point, point, Properties } from '@turf/turf';

export default (simplifiedResults): FeatureCollection<Point, Properties> =>
  featureCollection(
    simplifiedResults.map((res) => {
      const location = wktLiteralPointToArray(res.location);
      delete res.location;
      return point(location, res);
    })
  );
