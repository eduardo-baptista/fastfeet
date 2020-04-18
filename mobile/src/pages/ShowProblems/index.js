import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import formatData from '~/utils/formatData';
import formatId from '~/utils/formatId';

import { HalfPurpleBackground as Background } from '~/components/Backgrounds';
import NoDataIndicator from '~/components/NoDataIndicator';
import { Title, Problem, ProblemText, ProblemDate, List } from './styles';

export default function ShowProblems({ route }) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = route.params;

  const formatedId = useMemo(() => formatId(id), [id]);
  const hasData = useMemo(() => problems.length > 0, [problems.length]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const { data } = await api.get(`delivery/${id}/problems`);
      const formatedData = data.map((d) => {
        d.createdAt = formatData(d.createdAt);
        return d;
      });

      setProblems(formatedData);
      setLoading(false);
    }

    loadData();
  }, [id]);

  return (
    <Background>
      <Title>Encomenda {formatedId}</Title>
      {!hasData && <NoDataIndicator />}
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <List
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Problem>
              <ProblemText>{item.description}</ProblemText>
              <ProblemDate>{item.createdAt}</ProblemDate>
            </Problem>
          )}
        />
      )}
    </Background>
  );
}

ShowProblems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
