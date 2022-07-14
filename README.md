### Docker Commands

- docker build -t markdown-docker-image .
- docker push markdown-docker-image
- docker logs #Container ID
- docker run -it markdown-docker-image sh


### Kubernetes Commands

- kubectl get pods
- kubectl get services
- kubectl get nodes
- kubectl get deploymentsgit push --set-upstream origin master
- kubectl get namespaces

- kubectl apply -f k8s-demo-deployment.yaml
- kubectl apply -f .

- kubectl logs auth-depl

- kubectl exec -it auth-depl sh
- kubectl exec -it auth-depl -- sh

- kubectl rollout restart deployment auth-depl
- kubectl rollout status deployment auth-depl

- kubectl port-forward <pod_name> internal_port:external_port

### Jest Testing Commands

- npm run test
- npm test ./filename