driver = require('node-ssh');

    #removed password, replaced with a private key for server access
    ssh = new driver({
              host: '128.199.210.255',
              username: 'root',
              privateKey : '/root/.ssh/id_rsa'
            });

    ssh.connect().then(function() {
              #add manual connection if driver fails (might need to change perms to 600)
              ssh -i id_rsa root@128.199.210.255

            },function(error) {
                console.log(error);

            });
